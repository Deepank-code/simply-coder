"use client";

import { useState } from "react";
import { ClipboardCopy } from "lucide-react";

export default function StatusCard({ text, hashtags = [] }) {
  const [copied, setCopied] = useState(false);

  const fullText = hashtags.length > 0 ? `${text} ${hashtags.join(" ")}` : text;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Failed to copy");
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md mb-3 group flex justify-between items-start">
      <div>
        <p className="text-gray-800">{text}</p>
        {hashtags.length > 0 && (
          <p className="text-xs text-gray-500 mt-1">{hashtags.join(" ")}</p>
        )}
      </div>
      <button
        onClick={handleCopy}
        title="Copy status"
        className="opacity-60 group-hover:opacity-100 transition ml-3 text-emerald-600"
      >
        {copied ? (
          <span className="text-xs">Copied!</span>
        ) : (
          <ClipboardCopy size={18} />
        )}
      </button>
    </div>
  );
}
