import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { contentType, videoType, topic, tone, target, language } = body;
    const prompt = `You are an expert YouTube content strategist.

Generate exactly one SEO-optimized YouTube ${contentType} in ${language} based on the following inputs:

- Video Type: ${videoType}
- Topic: ${topic}
- Tone: ${tone}
- Target Audience: ${target}

Your response must strictly be a valid JSON object (not a string) with the following structure:

{
  "title": "A single, engaging, and SEO-friendly video title",
  "description": "An attention-grabbing YouTube description that summarizes the video clearly, uses natural language, and includes relevant keywords for search optimization",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"]
}

Return only a complete, syntactically correct JSON object. Do not include any extra characters, markdown, or line breaks. Ensure it ends with a closing curly brace }.
`;

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
          "X-Title": "youtube Generator",
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
