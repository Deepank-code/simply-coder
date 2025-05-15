"use client";
import Image from "next/image";
import { useState } from "react";

export default function InstaCaptionBioForm() {
  const [form, setForm] = useState({
    contentType: "caption",
    style: "aesthetic",
    context: "",
    characterLimit: "medium",
    language: "english",
    includeHashtags: "yes",
    emojiLevel: "few",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating Instagram content with:", form);
    // TODO: Connect to AI API with form data
  };

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-100">
      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
          <Image src="/insta.png" alt="Instagram" width={60} height={60} />
          Instagram Caption/ Bio Generator
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
              <option value="caption">Caption</option>
              <option value="bio">Bio</option>
            </select>
          </div>

          {/* Style / Vibe */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Style / Vibe
            </label>
            <select
              name="style"
              value={form.style}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="aesthetic">Aesthetic</option>
              <option value="funny">Funny</option>
              <option value="love">Love</option>
              <option value="travel">Travel</option>
              <option value="business">Business</option>
              <option value="savage">Savage</option>
              <option value="influencer">Influencer</option>
              <option value="fitness">Fitness</option>
            </select>
          </div>

          {/* Prompt / Context */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Describe Your Post or Theme
            </label>
            <textarea
              name="context"
              value={form.context}
              onChange={handleChange}
              placeholder="e.g. chilling at the beach with friends"
              rows={3}
              className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Character Limit & Language */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Character Length
              </label>
              <select
                name="characterLimit"
                value={form.characterLimit}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="short">Short (under 100)</option>
                <option value="medium">Medium (100–200)</option>
                <option value="long">Full Length (up to 2200)</option>
              </select>
            </div>

            <div className="flex-1">
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
          </div>

          {/* Hashtags + Emoji */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Include Hashtags?
              </label>
              <select
                name="includeHashtags"
                value={form.includeHashtags}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Emoji Style
              </label>
              <select
                name="emojiLevel"
                value={form.emojiLevel}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="none">None</option>
                <option value="few">Few</option>
                <option value="expressive">Expressive</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-rose-500 text-white py-3 rounded-full font-semibold hover:bg-rose-600 transition"
          >
            ✨ Generate Caption / Bio
          </button>
        </form>
      </div>
    </section>
  );
}
