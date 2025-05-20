import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { contentType, goal, industry, context, tone, length, language } =
      body;
    const prompt = `Generate exactly one unique and professional LinkedIn ${contentType} in ${language}.
Goal: ${goal}
Industry: ${industry}
Context: ${context}
Tone: ${tone}
Length: ${length} characters.

Make it engaging, authentic, and tailored for LinkedIn. Use natural human language, and do not include anything generic or repeated. Output only the final ${contentType}.`;

    // Call OpenRouter API
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
          "X-Title": "Linked in post Generator",
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
