"use client";

import { useState } from "react";
import { ClipboardCopy, Share2 } from "lucide-react";
import themes from "../_lib/theme";
import toast from "react-hot-toast";
import Link from "next/link";
import { handleShare } from "../_lib/util";

export default function QuoteList({ themeKey = "default", content }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const theme = themes[themeKey] || themes.default;
  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success("Successfully copied!");
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (error) {
      toast("Failed to copy!");
    }
  };

  return (
    <div
      className={`${theme.gradient}  px-4 py-12 min-h-screen`}
      style={{
        backgroundColor: content.theme?.bgColor || "#fff",
        color: content.theme?.textColor || "#000",
      }}
    >
      <div
        className={`max-w-3xl mx-auto text-center mb-10 mt-20 ${theme.headingColor}`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span>{theme.icon}</span> {content.title}
        </h1>
        <p className="text-gray-600 text-lg">{content.description}</p>{" "}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium mb-6 mt-6"
          aria-label="Quote Categories"
        >
          {/* Emotions */}
          <Link
            href="/content/sad-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😢 Sad Quotes
          </Link>
          <Link
            href="/content/heartbroken-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            💔 Heartbroken
          </Link>
          <Link
            href="/content/alone-status"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😔 Alone
          </Link>
          <Link
            href="/content/missing-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😞 Missing
          </Link>

          {/* Love & Attitude */}
          <Link
            href="/content/love-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            ❤️ Love
          </Link>
          <Link
            href="/content/romantic-status"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            💖 Romantic
          </Link>
          <Link
            href="/content/attitude-status"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😎 Attitude
          </Link>
          <Link
            href="/content/flirty-captions"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😉 Flirty
          </Link>

          {/* Occasions */}
          <Link
            href="/content/good-morning-messages"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            🌅 Good Morning
          </Link>
          <Link
            href="/content/good-night-messages"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            🌙 Good Night
          </Link>

          {/* Motivation & Fun */}
          <Link
            href="/content/motivational-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            💪 Motivation
          </Link>
          <Link
            href="/content/one-liners"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            💬 One-Liners
          </Link>
          <Link
            href="/content/funny-status"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            😂 Funny
          </Link>
          <Link
            href="/content/savage-quotes"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            🔥 Savage
          </Link>

          {/* Hindi */}
          <Link
            href="/content/hindi-shayari"
            className={`bg-white/80  px-3 py-1 rounded-full ${theme.headingColor} hover:bg-white hover:underline transition`}
          >
            📝 Hindi Shayari
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {content.content.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all text-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <p className="w-full">{item}</p>

            <div className="flex items-center gap-4">
              {/* Share Button */}
              <button
                onClick={() => handleShare(item)}
                className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                title="Share this content"
              >
                <Share2 size={16} />
              </button>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(item, index)}
                className="text-rose-600 font-semibold hover:underline flex items-center gap-1"
                title="Copy to clipboard"
              >
                {copiedIndex === index ? (
                  "Copied!"
                ) : (
                  <>
                    <ClipboardCopy size={16} /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
