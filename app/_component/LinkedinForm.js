"use client";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRecycle } from "react-icons/fa";
import { checkPromptLimit, incrementPromptCount } from "../_lib/promptLimit";
const LinkedinForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");
  const [lastForm, setLastForm] = useState("");
  const [form, setForm] = useState({
    contentType: "post",
    goal: "inform",
    industry: "technology",
    context: "",
    tone: "professional",
    length: "medium",
    language: "english",
  });
  const generatePost = async (form) => {
    const { allowed, remaining } = checkPromptLimit();
    if (!allowed) {
      toast.error("🚫 Daily limit reached. Try again tomorrow.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/ai/generate-linkedin-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to generate Post");
      }

      const data = await response.json();
      setResult(data.result);
      incrementPromptCount();
      toast.success(`Prompt used. ${remaining - 1} left today.`);

      setLoading(false);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.context.length <= 2) {
      toast("Oops! You forgot to add context.", {
        icon: "🚫",
      });
      return;
    }

    await generatePost(form);

    setLastForm(form);
  };
  const handleRegenerate = async () => {
    await generatePost(form);
  };

  return (
    <>
      {" "}
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
              <option value="hindi" disabled>
                Hindi(Coming Soon)
              </option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full mt-4 ${
              loading ? "bg-sky-300" : "bg-sky-500"
            }  text-white py-3 rounded-full font-semibold ${
              loading ? "" : "hover:bg-sky-600"
            }  transition"`}
          >
            {loading ? "Generating post..." : "✨ Generate LinkedIn Content"}
          </button>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 pt-20">
          <div className="max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 max-w-[350px] mx-6 md:max-w-xl w-full  relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Generated Post
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

export default LinkedinForm;
