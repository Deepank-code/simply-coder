"use client";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaClipboard, FaCopy, FaRecycle } from "react-icons/fa";
import { checkPromptLimit, incrementPromptCount } from "../_lib/promptLimit";
const YoutubeForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");
  const [lastForm, setLastForm] = useState("");
  const [form, setForm] = useState({
    contentType: "all",
    videoType: "tutorial",
    topic: "",
    tone: "engaging",
    target: "clicks",
    language: "english",
  });
  const generate = async (form) => {
    setLoading(true);
    const { allowed, remaining } = checkPromptLimit();
    if (!allowed) {
      toast.error("🚫 Daily limit reached. Try again tomorrow.");
      return;
    }

    try {
      const response = await fetch("/api/ai/generate-youtube-title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to generate YouTube content");
      }

      const data = await response.json();
      console.log(data.result);

      // Clean the JSON string if needed
      let resultObject;
      if (typeof data.result === "string") {
        let cleanJsonString = data.result
          .trim()
          .replace(/\\n/g, "")
          .replace(/\\"/g, '"')
          .replace(/^"+|"+$/g, "");

        // Force closing if missing
        if (!cleanJsonString.endsWith("}")) {
          cleanJsonString += "}";
        }

        resultObject = JSON.parse(cleanJsonString);
      } else {
        resultObject = data.result;
      }

      setResult(resultObject);
      setShowModal(true);
      incrementPromptCount();
      toast.success(`Prompt used. ${remaining - 1} left today.`);
    } catch (err) {
      console.error("Error generating content:", err);
      toast.error(
        "⚠️ Something went wrong while generating. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLastForm(form);
    if (form.topic.length <= 2) {
      toast("Please enter a topic before generating content!!", {
        icon: "🚫",
      });
      return;
    }
    await generate(form);
  };
  const handleRegenerate = async (form) => {
    await generate(form);
  };
  return (
    <>
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
              <option value="hindi" disabled>
                Hindi(Coming Soon)
              </option>
              <option value="Hinglish" disabled>
                Hinglish(Coming Soon)
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 ${
              loading ? "bg-rose-300" : "bg-rose-500"
            }  text-white py-3 rounded-full font-semibold ${
              loading ? "" : "hover:bg-rose-600"
            }  transition`}
          >
            {loading
              ? "Crafting your YouTube magic... 🎥✨"
              : "🎬 Generate YouTube Content"}
          </button>
        </form>
      </div>{" "}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-24">
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto space-y-6 ">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              🎯 Generated Content
            </h2>
            {/* Title Section */}
            <div className="relative bg-white rounded-2xl p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📌 Title
              </h3>
              <p className="text-gray-700">{result?.title}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result?.description);
                  toast.success("Text copied to clipboard!!");
                }}
                className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-700"
                title="Copy Title"
              >
                <FaClipboard />
              </button>
            </div>
            {/* Description Section */}
            <div className="relative bg-white rounded-2xl p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📝 Description
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {result?.description}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result?.description);
                  toast.success("Text copied to clipboard!!");
                }}
                className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-700"
                title="Copy Description"
              >
                <FaClipboard />
              </button>
            </div>
            {/* Tags Section */}
            <div className="relative bg-white rounded-2xl p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🏷️ Tags
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                {result?.tags?.map((tag, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result?.description);
                  toast.success("Text copied to clipboard!!");
                }}
                className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-700"
                title="Copy Tags"
              >
                <FaClipboard />
              </button>
            </div>{" "}
            <button
              disabled={loading}
              onClick={() => lastForm && handleRegenerate(lastForm)}
              className={`mt-4 w-1/2  ${
                loading ? "bg-rose-300" : "bg-rose-500"
              } text-white py-2 rounded-xl hover:bg-red-300 transition flex items-center justify-center mx-auto`}
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

export default YoutubeForm;
