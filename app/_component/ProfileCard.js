"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProfileCard() {
  const gradient = "from-[#a077ff] via-[#ff3ec8] to-[#ffc107]";

  return (
    <div
      className="relative  w-11/12 mx-auto
     sm:w-full max-w-md sm:mx-auto group transition-transform duration-300 hover:scale-[1.015]"
    >
      {/* Animated Gradient Border */}
      <div
        className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br ${gradient} z-0`}
      >
        <div className="w-full h-full rounded-[inherit] bg-white" />
      </div>

      {/* Animated Gradient Glow */}
      <div
        className={`
          absolute inset-0 rounded-2xl 
          bg-[linear-gradient(130deg,#a077ff,#ff3ec8,#ffc107,#a077ff)]
          bg-[length:200%_200%] animate-glow
          blur-2xl opacity-40 z-[-1]
          transition-opacity duration-300
          group-hover:opacity-70
        `}
      />

      {/* Card Content */}
      <div className="relative z-10 p-6 rounded-2xl bg-white flex items-center space-x-5">
        {/* Profile Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            width={100}
            height={100}
            src="/your-profile.jpg"
            alt="Deepank Joshi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">Deepank Joshi</h3>
          <p className="text-pink-600 font-medium text-sm mb-1">
            Full Stack Developer
          </p>
          <p className="text-gray-700 text-sm">
            Passionate about building creative tools that make life easier.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-3 text-lg text-gray-600">
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-black transition duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-600 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-500 transition duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
