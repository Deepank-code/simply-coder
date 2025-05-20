import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProfileCardTailwind() {
  const gradient =
    "bg-gradient-to-br from-[#a077ff] via-[#ff3ec8] to-[#ffc107]";

  return (
    <div className="max-w-md mx-auto rounded-2xl p-6 relative bg-white overflow-hidden">
      {/* Gradient Border */}
      <div
        className={`absolute inset-0 rounded-2xl z-[-1] p-[2px] ${gradient} mask-border`}
      />

      {/* Gradient Shadow Glow */}
      <div
        className={`absolute inset-0 rounded-2xl z-[-2] blur-xl opacity-50 ${gradient}`}
      />

      {/* Card Content */}
      <div className="flex items-center space-x-5">
        {/* Profile Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="/your-profile.jpg" // Replace with your image
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
