"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ContentHubDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const groups = [
    {
      title: "Social Vibes",
      links: [
        {
          name: "WhatsApp Status",
          href: "/tools/whatsapp/whatsapp-status-categories",
        },
        {
          name: "Instagram Bio/Captions",
          href: "/tools/instagram/instagram-caption-categories",
        },
      ],
    },
    {
      title: "Emotions",
      links: [
        { name: "Sad Quotes", href: "/content/sad-quotes" },
        { name: "Heartbroken Quotes", href: "/content/heartbroken-quotes" },
        { name: "Alone Status", href: "/content/alone-status" },
        { name: "Missing Someone", href: "/content/missing-quotes" },
      ],
    },
    {
      title: "Love & Attitude",
      links: [
        { name: "Love Quotes", href: "/content/love-quotes" },
        { name: "Romantic Status", href: "/content/romantic-status" },
        { name: "Attitude Status", href: "/content/attitude-status" },
        { name: "Flirty Captions", href: "/content/flirty-captions" },
      ],
    },
    {
      title: "Occasions",
      links: [
        {
          name: "Good Morning Messages",
          href: "/content/good-morning-messages",
        },
        { name: "Good Night Messages", href: "/content/good-night-messages" },
      ],
    },
    {
      title: "Motivation & Fun",
      links: [
        { name: "Motivational Quotes", href: "/content/motivational-quotes" },
        { name: "One-Liners & Punchlines", href: "/content/one-liners" },
        { name: "Funny Status", href: "/content/funny-status" },
        { name: "Savage Quotes", href: "/content/savage-quotes" },
      ],
    },
    {
      title: "Hindi",
      links: [{ name: "Hindi Shayari", href: "/content/hindi-shayari" }],
    },
  ];

  const toggleSubmenu = (idx) => {
    setOpenSubmenu(openSubmenu === idx ? null : idx);
  };

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setOpenSubmenu(null);
        }}
        className="px-4 py-1 sm:px-3 sm:py-1 rounded-full text-gray-600 hover:text-white hover:bg-[#dd80ff] font-semibold flex items-center justify-between w-full md:w-auto"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Content Hub
        <span className="ml-2">&#9662;</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-36 sm:w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
          <ul className="divide-y divide-gray-100">
            {groups.map((group, idx) => (
              <li key={group.title} className="relative">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSubmenu(idx)}
                  aria-expanded={openSubmenu === idx}
                >
                  {group.title}
                  <span className="ml-2">
                    {openSubmenu === idx ? "▾" : "▸"}
                  </span>
                </button>

                {openSubmenu === idx && (
                  <ul className="absolute top-0 -left-48 sm:-left-60 ml-1 mt-0 w-48 sm:w-60 max-h-72 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenSubmenu(null);
                          }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default ContentHubDropdown;
