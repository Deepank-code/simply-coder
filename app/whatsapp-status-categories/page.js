// Updated WhatsApp Status Categories Page with Clipboard Integration and Gradient Theme

"use client";

import { ClipboardCopy } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "🎉 Birthday Wishes",
    subcategories: {
      "For Best Friend": [
        "Happy Birthday to my ride or die! 🎂💖",
        "Wishing you laughter, love & cake, bestie!",
      ],
      "For Mother": [
        "Happy Birthday, Maa! You're my everything. 💐",
        "Thanks for your endless love, Mom. Have a beautiful day! 🎁",
      ],
      "For Father": [
        "Happy Birthday Dad! You're my hero. 🎉",
        "To the strongest man I know, have a fantastic day! 💪",
      ],
    },
  },
  {
    title: "❤️ Love & Romantic",
    subcategories: {
      General: [
        "You're my today and all of my tomorrows. 💌",
        "Love isn't something you find, it's something you feel. 💖",
      ],
    },
  },
  {
    title: "🤝 Friendship",
    subcategories: {
      General: [
        "True friends are never apart, maybe in distance but never in heart.",
        "Friends are the siblings God never gave us.",
      ],
    },
  },
  {
    title: "🚀 Motivation",
    subcategories: {
      General: [
        "Push yourself, because no one else is going to do it for you.",
        "Dream big. Work hard. Stay focused.",
      ],
    },
  },
  {
    title: "😢 Sad & Emotional",
    subcategories: {
      General: [
        "Tears come from the heart and not from the brain.",
        "Sometimes, it's okay to not be okay.",
      ],
    },
  },
  {
    title: "🔥 Attitude",
    subcategories: {
      General: [
        "I’m not special, I’m just a limited edition. 😎",
        "My attitude is based on how you treat me.",
      ],
    },
  },
];

export default function StatusCategoriesPage() {
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
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100 ">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-12">
          📚 WhatsApp Status by Category
        </h1>

        {categories.map((cat, cIndex) => (
          <div key={cIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4 border-b pb-1">
              {cat.title}
            </h2>
            {Object.entries(cat.subcategories).map(([sub, statuses]) => (
              <div key={sub} className="mb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {sub}
                </h3>
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
      </div>
    </section>
  );
}
