"use client";
import Image from "next/image";
import { useState } from "react";

export default function LinkedInContentForm() {
  const [form, setForm] = useState({
    contentType: "post",
    goal: "inform",
    industry: "technology",
    context: "",
    tone: "professional",
    length: "medium",
    language: "english",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating LinkedIn content with:", form);
    // TODO: Connect to AI backend
  };

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-sky-100">
      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
          <Image src="/ln.png" alt="LinkedIn" width={60} height={60} />
          LinkedIn Bio / Post Generator
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
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="post">Post</option>
              <option value="bio">Bio</option>
            </select>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Main Goal
            </label>
            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="inform">Inform</option>
              <option value="inspire">Inspire</option>
              <option value="promote">Promote something</option>
              <option value="connect">Build connections</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Industry
            </label>
            <select
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="technology">Technology</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="design">Design</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Context */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              What is it about?
            </label>
            <textarea
              name="context"
              value={form.context}
              onChange={handleChange}
              placeholder="e.g. Sharing my journey into freelancing"
              rows={3}
              className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Tone and Length */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Tone
              </label>
              <select
                name="tone"
                value={form.tone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="humble">Humble</option>
                <option value="inspirational">Inspirational</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Length
              </label>
              <select
                name="length"
                value={form.length}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
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
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-sky-500 text-white py-3 rounded-full font-semibold hover:bg-sky-600 transition"
          >
            ✨ Generate LinkedIn Content
          </button>
        </form>
      </div>
    </section>
  );
}
