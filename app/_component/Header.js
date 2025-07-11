"use client";
import { Fuzzy_Bubbles } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon, FaHamburger, FaCross } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import ContentHubDropdown from "./ContentHubDropdown";
const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className=" w-full z-[999] flex items-center justify-between  h-20 fixed top-4  bg-white/40 rounded-2xl sm:rounded-full shadow-lg backdrop-blur-md border border-white/30 px-7 sm:w-11/12  sm:mx-auto sm:right-0 sm:left-0">
      <Link
        href={"/"}
        className={`${fuzzy.className} text-xl font-bold bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent md:text-3xl sm:text-[22px]`}
      >
        <b> &lt;Simply Coder/&gt;</b>
      </Link>
      <ul
        className={`md:flex text-center sm:items-center space-y-2 py-5  rounded md:space-x-4  sm:space-x-5 md:static  absolute top-22 right-2 w-2/5 bg-white sm:w-auto md:bg-transparent px-1 sm:px-1 md:space-y-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            href={"/tools"}
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-1 sm:px-3 sm:py-1 rounded-full ${
              pathName === "/tools"
                ? "bg-purple-800  font-semibold text-white"
                : "text-gray-500"
            }`}
          >
            Tools
          </Link>
        </li>

        <ContentHubDropdown />
        {/* <li>
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-1 sm:px-3 sm:py-1 rounded-full ${
              pathName === "/blog"
                ? "bg-purple-800 font-semibold text-white"
                : "text-gray-500"
            }`}
          >
            Blogs
          </Link>
        </li> */}
        <li>
          <Link
            href={"/privacy-policy"}
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-1 sm:px-3 sm:py-1 rounded-full ${
              pathName === "/privacy-policy"
                ? "bg-purple-800  font-semibold text-white"
                : "text-gray-500"
            }`}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-1 sm:px-3 sm:py-1 rounded-full ${
              pathName === "/about"
                ? "bg-purple-800  font-semibold text-white"
                : "text-gray-500"
            }`}
          >
            About us{" "}
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-1 sm:px-3 sm:py-1 rounded-full ${
              pathName === "/contact"
                ? "bg-purple-800  font-semibold text-white"
                : "text-gray-500"
            }`}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <button
        className={`hidden px-5 py-2 text-black-300 rounded-full bg-amber-300  text-white sm:hidden${
          isToggled ? "dark:bg-gray-800 dark:text-white" : ""
        }`}
        onClick={handleToggle}
      >
        {isToggled ? <FaMoon /> : <FaSun />}
      </button>{" "}
      <button
        className="flex md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <GiCrossMark style={{ color: "#CA33FF" }} />
        ) : (
          <FaHamburger style={{ color: "#CA33FF" }} />
        )}
      </button>
    </nav>
  );
};

export default Header;
