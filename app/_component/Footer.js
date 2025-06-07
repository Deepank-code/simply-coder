// components/Footer.jsx

import { Fuzzy_Bubbles } from "next/font/google"; // Your preferred logo font
import Link from "next/link"; // Use Link for internal navigation

// Your original Fuzzy_Bubbles font setup
const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400"], // Using 400 as per your previous setup
});

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-white/50 border-t border-gray-200 text-gray-800 py-8 px-6 md:px-12 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block mb-3">
            <h1
              className={`${fuzzy.className} text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF]`}
            >
              <b> &lt;Simply Coder/&gt;</b> {/* Your original logo style */}
            </h1>
          </Link>
          <p className="text-sm text-gray-700 leading-relaxed">
            Creative tools made simple. AI-powered, fast, and free. Simplify
            your coding journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <nav aria-label="Quick Links">
            <h2 className="font-bold text-lg text-gray-900 mb-3">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Our Tools */}
        <div>
          <nav aria-label="Our Tools">
            <h2 className="font-bold text-lg text-gray-900 mb-3">Our Tools</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="/tools/youtube"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Youtube Content Gen.
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/whatsapp"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  WhatsApp Status Gen.
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/instagram"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Insta caption/bio Gen.
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/linkedin"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Linkedin Post Gen.
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Simply Coder. All rights reserved.
        Crafted with ☕ &amp; code.
      </div>
    </footer>
  );
};

export default Footer;
