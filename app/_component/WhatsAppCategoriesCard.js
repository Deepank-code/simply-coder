"use client";

import { ClipboardCopy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { globalWhatsappTips } from "../_lib/db";
import Image from "next/image";

const WhatsAppCategoriesCard = ({ categories }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (text, i) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(i);
      toast.success("Successfully copied!");
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  let idx = 0;

  // Generate unique IDs for each category based on the title
  const categoryIds = categories.map((cat) =>
    cat.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
  );

  return (
    <>
      {/* Navigation Links */}
      <nav className="mb-8 flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <a
            key={categoryIds[index]}
            href={`#${categoryIds[index]}`}
            className="text-[#00861b] hover:underline cursor-pointer font-medium"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      {/* Category Sections */}
      {categories.map((cat, cIndex) => (
        <div key={cIndex} id={categoryIds[cIndex]} className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4 border-b pb-1">
            {cat.title}
          </h2>

          {Object.entries(cat.subcategories).map(([sub, content]) => (
            <div key={sub} className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">{sub}</h3>

              {/* Paragraph intro for each subcategory */}
              <p className="text-gray-700 text-base mb-3">
                {content.paragraph}
              </p>

              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {content.messages.map((status) => {
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
      <div className="mt-16 p-6 bg-emerald-50 rounded-lg shadow-lg border-l-4 border-emerald-500">
        <h2 className="text-3xl font-bold text-emerald-800 mb-4 text-center">
          {globalWhatsappTips.title}
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-center">
          {globalWhatsappTips.intro}
        </p>
        <ul className="list-none p-0 m-0 space-y-8">
          {globalWhatsappTips.points.map((point, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl font-bold text-emerald-600 md:mr-4">
                {index + 1}.
              </div>
              <div className="flex-grow ">
                <p className="text-gray-800 text-base mb-2">{point.text}</p>

                {point.imageUrl && (
                  <div className="mt-2 text-center ">
                    <Image
                      width={200}
                      height={300}
                      src={point.imageUrl}
                      alt={point.imageAlt}
                      className="max-w-full h-auto rounded-lg shadow-md border border-gray-200 inline-block"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        {globalWhatsappTips.callToAction && (
          <p className="text-emerald-600 text-md mt-6 font-semibold text-center">
            {globalWhatsappTips.callToAction}
          </p>
        )}
      </div>
    </>
  );
};

export default WhatsAppCategoriesCard;
