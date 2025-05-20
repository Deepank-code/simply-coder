"use client";

import { ClipboardCopy } from "lucide-react";
import { useState } from "react";

const InstaCategoriesCard = ({ categories }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (caption, hashtags, index) => {
    const fullText = `${caption} ${hashtags.join(" ")}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  let idx = 0;
  return (
    <>
      {categories.map((cat, cIndex) => {
        const id = cat.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");

        return (
          <div key={cIndex} id={id} className="mb-12">
            <h2 className="text-2xl font-semibold text-rose-500 mb-4 border-b pb-1">
              {cat.title}
            </h2>
            {Object.entries(cat.subcategories).map(([sub, captions]) => (
              <div key={sub} className="mb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {sub}
                </h3>

                <ul className="space-y-6">
                  {captions.map(({ text, hashtags }) => {
                    const localIndex = idx++;
                    return (
                      <li
                        key={localIndex}
                        className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow flex justify-between items-start gap-4"
                      >
                        <div className="flex flex-col">
                          <p className="text-gray-800 mb-3">{text}</p>
                          <p className="text-sm text-rose-500">
                            {hashtags.map((tag, i) => (
                              <span key={i} className="mr-3">
                                {tag}
                              </span>
                            ))}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            copyToClipboard(text, hashtags, localIndex)
                          }
                          className="text-rose-600 font-semibold hover:underline flex items-center gap-1 mt-1 flex-shrink-0"
                          title="Copy caption"
                        >
                          {copiedIndex === localIndex ? (
                            "Copied!"
                          ) : (
                            <>
                              <ClipboardCopy size={16} /> Copy
                            </>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default InstaCategoriesCard;
