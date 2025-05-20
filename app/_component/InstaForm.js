"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRecycle } from "react-icons/fa";
import { checkPromptLimit, incrementPromptCount } from "../_lib/promptLimit";
const InstaForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  const [form, setForm] = useState({
    contentType: "caption",
    style: "aesthetic",
    context: "",
    characterLimit: "medium",
    language: "english",
    includeHashtags: "yes",
    emojiLevel: "few",
  });

  const [lastform, setLastform] = useState();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const generateCaption = async (form) => {
    const { allowed, remaining } = checkPromptLimit();
    if (!allowed) {
      toast.error("🚫 Daily limit reached. Try again tomorrow.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/ai/generate-insta-caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to generate status");
      }

      const data = await response.json();
      setResult(data.result);

      setLoading(false);
      incrementPromptCount();
      toast.success(`Prompt used. ${remaining - 1} left today.`);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLastform(form);
    if (form.context.length <= 2) {
      toast("Oops! You forgot to add context.", {
        icon: "🚫",
      });
      return;
    }

    await generateCaption(form);
  };
  const handleRegenerate = async () => {
    await generateCaption(form);
  };
  return (
    <>
      {" "}
      <div className="relative max-w-[1322px] mx-auto">
        {/* Floating Sidebar (Large Screens) */}
        <div className="lg:block hidden absolute left-10 top-[30%] -translate-y-1/2 w-64 bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold text-rose-600 mb-4">
            📚 Caption Vibes
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Aesthetic</li>
            <li>Funny</li>
            <li>Love & Romantic</li>
            <li>Travel</li>
            <li>Fitness</li>
            <li>Business</li>
            <li>Influencer</li>
            <li>Savage</li>
          </ul>
          <button
            onClick={() =>
              router.push("/instagram/instagram-caption-categories")
            }
            className="mt-6 bg-rose-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-rose-600 transition w-full text-sm"
          >
            ✨ Explore Styles
          </button>
        </div>

        {/* Form Box */}
        <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl relative z-10 mt-10">
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
                  <option value="hindi" disabled>
                    Hindi(Coming Soon)
                  </option>
                  <option value="Hinglish" disabled>
                    Hinglish(Coming Soon)
                  </option>
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
              disabled={loading}
              className={`w-full mt-4 ${
                loading ? "bg-rose-300" : "bg-rose-500"
              } text-white py-3 rounded-full font-semibold ${
                loading ? "" : "hover:bg-rose-600"
              }  transition`}
            >
              {loading ? "Spinning your vibe..." : "✨ Generate Caption / Bio"}
            </button>
          </form>
        </div>

        {/* Sidebar Below for Small Screens */}
        <div className="lg:hidden mt-8 w-full max-w-xl mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
          <h3 className="text-xl font-bold text-rose-600 mb-4">
            📚 Caption Vibes
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Aesthetic</li>
            <li>• Funny</li>
            <li>• Love & Romantic</li>
            <li>• Travel</li>
            <li>• Fitness</li>
            <li>• Business</li>
            <li>• Influencer</li>
            <li>• Savage</li>
          </ul>
          <button
            onClick={() =>
              router.push("/instagram/instagram-caption-categories")
            }
            className="mt-6 bg-rose-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-rose-600 transition w-full text-sm"
          >
            ✨ Explore Styles
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Generated Status
            </h3>
            <p className="text-gray-700 whitespace-pre-wrap">{result}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("Copied to clipboard!");
              }}
              className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition"
            >
              Copy
            </button>
            <button
              onClick={() => lastform && handleRegenerate(lastform)}
              className={`mt-4 w-1/2 ${
                loading ? "bg-[#eb8989]" : "bg-[#ef6d6d]"
              }  text-white py-2 rounded-xl ${
                loading ? "" : "hover:bg-red-300"
              }  transition flex items-center justify-center mx-auto`}
            >
              {loading ? "One moment..." : "Try a New One"}
              <span className="ml-3 align-middle">
                <FaRecycle />
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InstaForm;
