import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      contentType,
      style,
      context,
      characterLimit,
      language,
      includeHashtags,
      emojiLevel,
    } = body;

    const prompt = `Write one creative, engaging ${contentType} for Instagram in ${language}. 
Tone: ${style}. 
Context: ${context}. 
Limit: ${characterLimit} characters. 
${includeHashtags ? "Include 1–2 trending hashtags." : "No hashtags."} 
Use ${emojiLevel} emoji usage. 
Return only the ${contentType}, nothing else.`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3.3-8b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000/",
          "X-Title": "Insta caption Generator",
        },
      }
    );

    const generated = response.data.choices[0].message.content;

    return NextResponse.json({ status: "success", result: generated });
  } catch (err) {
    console.error("OpenRouter API error:", err?.response?.data || err.message);
    return NextResponse.json(
      { status: "error", message: "Failed to generate status" },
      { status: 500 }
    );
  }
}
