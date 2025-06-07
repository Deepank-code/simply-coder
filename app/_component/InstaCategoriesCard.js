"use client";

import { ClipboardCopy } from "lucide-react";
import { useState } from "react";
import { globalInstaBioTips } from "../_lib/db";

const InstaCategoriesCard = ({ categories }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (caption, hashtags, index) => {
    const fullText = `${caption} ${hashtags.join(" ")}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedIndex(index);
      toast.success("Successfully copied!");
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  let idx = 0;
  return (
    <div className="w-full sm:max-w-5xl mx-auto mt-10 px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-center text-rose-600 mb-12">
        🎀 Instagram Captions by Theme
      </h1>
      <p className="text-rose-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-center">
        Discover the perfect Instagram captions tailored for every mood and
        occasion. From heartfelt to hilarious, explore our curated collection to
        elevate your posts and boost engagement with your followers.
      </p>
      <nav className="mb-8 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => {
          const id = cat.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
          return (
            <a
              key={id}
              href={`#${id}`}
              className="text-rose-600 hover:underline cursor-pointer font-medium"
            >
              {cat.title}
            </a>
          );
        })}
      </nav>
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
            <p className="text-sm sm:text-base text-rose-400 mt-1 mb-6 italic">
              {cat.intro}
            </p>

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
                        className="w-full bg-white/70 backdrop-blur-md p-5 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start gap-4"
                      >
                        <div className="flex flex-col">
                          <p className="text-gray-800 mb-3">{text}</p>
                          <p className="text-sm text-rose-500 flex flex-wrap gap-x-3">
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
      <div className="mt-20 p-8 bg-rose-50 rounded-lg shadow-xl border-l-4 border-rose-400">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">
          {globalInstaBioTips.title}
        </h2>
        <p className="text-gray-700 text-lg mb-8 text-center">
          {globalInstaBioTips.intro}
        </p>
        <ul className="list-none p-0 m-0 space-y-10">
          {globalInstaBioTips.points.map((point, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-5 p-5 bg-white rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-4xl font-bold text-rose-600 md:mr-5">
                {index + 1}.
              </div>
              <div className="flex-grow">
                <p
                  className="text-gray-800 text-base mb-3"
                  dangerouslySetInnerHTML={{ __html: point.text }}
                />
                {/* {point.imageUrl && (
                  <div className="mt-3 text-center md:text-left">
                    <img
                      src={point.imageUrl}
                      alt={point.imageAlt}
                      className="max-w-full h-auto rounded-lg shadow-md border border-gray-200 inline-block"
                      style={{ maxWidth: "400px" }} // Slightly larger image for bio tips
                    />
                  </div>
                )} */}
              </div>
            </li>
          ))}
        </ul>
        {globalInstaBioTips.callToAction && (
          <p className="text-rose-600 text-lg mt-8 font-semibold text-center">
            {globalInstaBioTips.callToAction}
          </p>
        )}
      </div>
    </div>
  );
};

export default InstaCategoriesCard;
