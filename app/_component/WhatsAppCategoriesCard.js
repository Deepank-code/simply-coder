"use client";

import { ClipboardCopy } from "lucide-react";
import { useState } from "react";
const WhatsAppCategoriesCard = ({ categories }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (text, i) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(i);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  let idx = 0;

  return (
    <>
      {" "}
      {categories.map((cat, cIndex) => (
        <div key={cIndex} className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4 border-b pb-1">
            {cat.title}
          </h2>
          {Object.entries(cat.subcategories).map(([sub, statuses]) => (
            <div key={sub} className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">{sub}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {statuses.map((status) => {
                  const localIndex = idx++;
                  return (
                    <li
                      key={localIndex}
                      className="bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-sm flex justify-between items-center group"
                    >
                      <span className="pr-3">{status}</span>
                      <button
                        onClick={() => copyToClipboard(status, localIndex)}
                        className="opacity-60 group-hover:opacity-100 transition"
                        title="Copy status"
                      >
                        {copiedIndex === localIndex ? (
                          <span className="text-emerald-600 text-xs">
                            Copied!
                          </span>
                        ) : (
                          <ClipboardCopy
                            size={18}
                            className="text-emerald-600"
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WhatsAppCategoriesCard;
