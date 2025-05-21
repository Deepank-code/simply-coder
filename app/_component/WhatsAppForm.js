"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRecycle } from "react-icons/fa";
import { checkPromptLimit, incrementPromptCount } from "../_lib/promptLimit";
const WhatsAppForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const [form, setForm] = useState({
    mood: "motivational",
    topic: "",
    length: "medium",
    language: "english",
  });
  const [lastForm, setLastForm] = useState(null);
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function generateStatus(form) {
    const { allowed, remaining } = checkPromptLimit();
    if (!allowed) {
      toast.error("🚫 Daily limit reached. Try again tomorrow.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/ai/generate-whatsapp-status", {
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
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLastForm(form);
    if (form.topic.length <= 2) {
      toast("Oops! You forgot to add a topic.", {
        icon: "🚫",
      });
      return;
    }
    await generateStatus(form);
  };
  const handleRegenerate = async () => {
    await generateStatus(lastForm);
  };
  return (
    <>
      {" "}
      <div className="relative max-w-[1322px] m-auto">
        {/* Floating Left Sidebar (Hidden on small screens, shown on large screens) */}
        <div className="lg:block hidden absolute left-10 top-[30%] -translate-y-1/2 w-64 bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold text-emerald-700 mb-4">
            🎯 Status Categories
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Birthday Wishes</li>
            <li>Love & Romantic</li>
            <li>Friendship</li>
            <li>Motivation</li>
            <li>Sad & Emotional</li>
            <li>Attitude</li>
          </ul>
          <button
            onClick={() =>
              router.push("/tools/whatsapp/whatsapp-status-categories")
            }
            className="mt-6 bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-600 transition w-full text-sm"
          >
            📚 Browse Categories
          </button>
        </div>

        {/* Centered Form */}
        <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl relative z-10 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
            <Image src="/whatsapp.png" alt="WhatsApp" width={60} height={0} />
            Generate WhatsApp Status
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mood/Tone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mood / Tone
              </label>
              <select
                name="mood"
                value={form.mood}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="motivational">Motivational</option>
                <option value="funny">Funny</option>
                <option value="romantic">Romantic</option>
                <option value="sad">Sad</option>
                <option value="attitude">Attitude</option>
              </select>
            </div>

            {/* Topic / Prompt */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Topic / Prompt
              </label>
              <textarea
                name="topic"
                value={form.topic}
                onChange={handleChange}
                placeholder="e.g. Birthday wish for best friend"
                rows={3}
                className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Length and Language */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Length
                </label>
                <select
                  name="length"
                  value={form.length}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
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
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
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

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-4 ${
                loading ? "bg-emerald-300" : "bg-emerald-500"
              }  text-white py-3 rounded-full font-semibold ${
                loading ? "" : "hover:bg-emerald-600"
              } transition`}
            >
              {loading ? "Spinning your vibe..." : "✨ Generate Status"}
            </button>
          </form>
        </div>

        {/* Sidebar below on small screens */}
        <div className="lg:hidden mt-8 w-full max-w-xl mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
          <h3 className="text-xl font-bold text-emerald-700 mb-4">
            🎯 Status Categories
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Birthday Wishes</li>
            <li>• Love & Romantic</li>
            <li>• Friendship</li>
            <li>• Motivation</li>
            <li>• Sad & Emotional</li>
            <li>• Attitude</li>
          </ul>
          <button
            onClick={() =>
              router.push("/tools/whatsapp/whatsapp-status-categories")
            }
            className="mt-6 bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-600 transition w-full text-sm"
          >
            📚 Browse Categories
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
              onClick={() => lastForm && handleRegenerate(lastForm)}
              className={`mt-4 w-1/2 ${
                loading ? "bg-[#c67878]" : "bg-[#ef6d6d]"
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

export default WhatsAppForm;
