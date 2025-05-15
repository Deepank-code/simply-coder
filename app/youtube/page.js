"use client";
import Image from "next/image";
import { useState } from "react";

export default function YouTubeContentForm() {
  const [form, setForm] = useState({
    contentType: "all",
    videoType: "tutorial",
    topic: "",
    tone: "engaging",
    target: "clicks",
    language: "english",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating YouTube content with:", form);
    // TODO: Connect to AI backend
  };

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-red-50 to-rose-100">
      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
          <Image src="/yt.png" alt="YouTube" width={60} height={60} />
          YouTube Title, Description & Tags Generator
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Content Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Generate for
            </label>
            <select
              name="contentType"
              value={form.contentType}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="all">Title + Description + Tags</option>
              <option value="title">Only Title</option>
              <option value="description">Only Description</option>
              <option value="tags">Only Tags</option>
            </select>
          </div>

          {/* Video Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Video Type
            </label>
            <select
              name="videoType"
              value={form.videoType}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="vlog">Vlog</option>
              <option value="tutorial">Tutorial</option>
              <option value="review">Product Review</option>
              <option value="reaction">Reaction</option>
              <option value="educational">Educational</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Topic / Prompt
            </label>
            <textarea
              name="topic"
              value={form.topic}
              onChange={handleChange}
              placeholder="e.g. How to learn Tailwind CSS in 2025"
              rows={3}
              className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Tone and Target */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Tone
              </label>
              <select
                name="tone"
                value={form.tone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="engaging">Engaging</option>
                <option value="educational">Educational</option>
                <option value="funny">Funny</option>
                <option value="clickbait">Clickbait</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Target Audience Goal
              </label>
              <select
                name="target"
                value={form.target}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="clicks">Get Clicks</option>
                <option value="seo">SEO Friendly</option>
                <option value="watchtime">Increase Watch Time</option>
              </select>
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Language
            </label>
            <select
              name="language"
              value={form.language}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-rose-500 text-white py-3 rounded-full font-semibold hover:bg-rose-600 transition"
          >
            🎬 Generate YouTube Content
          </button>
        </form>
      </div>
    </section>
  );
}
