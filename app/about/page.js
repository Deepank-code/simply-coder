"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ProfileCard from "../_component/ProfileCard";
import FramerMissionSection from "../_component/FramerMissionSection";
import FramerFeatureSection from "../_component/FramerFeatureSection";

const AboutUsPage = () => {
  const primaryTextColor = "#2c2c2c";
  const primaryAccentColor = "#6c63ff"; // A modern purple for AI
  const secondaryAccentColor = "#00bfa5"; // A teal for efficiency
  const backgroundColor = "#f7f7ff"; // Light, techy background
  const lightBackgroundColor = "bg-white/80 backdrop-blur-md";
  const buttonTextColor = "#ffffff";

  // Framer Motion variants for card hover animation
  const cardVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const imageVariants = {
    hidden: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -5, -5, 0, 0],
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    },
  };
  const iconStyle = "text-gray-600 hover:text-gray-800 transition duration-300";
  const iconSize = 24;

  return (
    <>
      <main className={`py-16 ${backgroundColor} mt-20`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Hero Section */}
          <section className="mb-12 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 z-10">
              <h1
                className={`text-[#222121] text-4xl md:text-5xl font-extrabold ${primaryAccentColor} tracking-tight mb-4 fade-in delay-200`}
              >
                About{" "}
                <span
                  className={`bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent`}
                >
                  Simply Coder
                </span>{" "}
                - Your AI Content Ally
              </h1>
              <p
                className={`text-lg ${primaryTextColor} leading-relaxed mb-6 fade-in delay-200 text-[#403838]`}
              >
                Welcome to Simply Coder, the smart platform that harnesses the
                power of AI to streamline your social media content creation.
                We&apos;re dedicated to helping you effortlessly generate
                compelling{" "}
                <span className={`font-semibold ${secondaryAccentColor}`}>
                  YouTube titles and descriptions, engaging WhatsApp statuses,
                  captivating Instagram captions, and impactful LinkedIn posts
                </span>
                , all in one place.
              </p>
              <Link
                href="/tools"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 hover:scale-105"
              >
                Discover Our AI Features
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="aspect-w-16 aspect-h-9  flex items-center justify-center overflow-hidden">
                <Image
                  src="/girl.png"
                  alt="Girl Illustration"
                  width={300}
                  height={400}
                  className=""
                  priority
                />
              </div>
            </div>
          </section>

          {/* Our Mission Section with Hover Animation on Cards */}
          <section className="py-12 border-t border-gray-200">
            <h2
              className={`text-3xl font-semibold ${primaryAccentColor} tracking-tight mb-6 text-[#333333]`}
            >
              Our Mission: Simplify Your Content Workflow
            </h2>
            <p
              className={`text-lg ${primaryTextColor} leading-relaxed mb-4 text-[#403838]`}
            >
              In today&apos;s fast-paced digital world, creating engaging
              content across multiple platforms can be time-consuming and
              challenging. Our mission at Simply Coder is to{" "}
              <span className={`font-semibold ${secondaryAccentColor}`}>
                empower you with intelligent AI tools
              </span>{" "}
              that simplify this process, allowing you to focus on your core
              message and connect with your audience more effectively.
            </p>
            <FramerMissionSection />
          </section>

          {/* Our Story Section */}

          {/* Key Features Section */}
          <section
            className={`py-16 ${lightBackgroundColor} border border-gray-200 rounded-3xl shadow-2xl mt-12`}
          >
            <h2
              className={`text-3xl font-extrabold ${primaryAccentColor} mb-8 text-center`}
            >
              Unlock the Power of Simply Coder&apos;s AI
            </h2>
            <FramerFeatureSection />
          </section>

          {/* Call to Action */}
          <section className="py-12 text-center">
            <h2
              className={`text-3xl font-semibold ${primaryAccentColor} tracking-tight mb-6`}
            >
              Ready to Simplify Your Social Media?
            </h2>
            <p className={`text-lg ${primaryTextColor} leading-relaxed mb-8`}>
              Experience the power of AI-driven content creation. Sign up for
              Simply Coder today and start generating engaging content
              effortlessly!
            </p>
          </section>
        </div>
        <ProfileCard />
      </main>
    </>
  );
};

export default AboutUsPage;
