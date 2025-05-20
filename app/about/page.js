"use client";

// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const page = () => {
//   return (
//     <div>
//       <section className="w-11/12 md:w-5/6 bg-[#ffcdd5] mx-auto mt-40 flex flex-col-reverse md:flex-row items-center justify-between relative rounded-3xl p-6 md:p-12 overflow-hidden">
//         <div className="md:w-1/2 z-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 fade-in">
//             Our Story
//           </h1>
//           <p className="text-base md:text-xl text-[#2c2c2c] fade-in delay-200">
//             Simply Coder began as a small side project, created to solve a
//             simple problem — making content generation easier for everyone. With
//             your support, it’s now a smart, accessible platform built on
//             intuitive AI. We’ve grown with your feedback and continue optimizing
//             for speed, accuracy, and simplicity — thank you for being part of
//             the journey!
//           </p>
//         </div>

//         <Image
//           className="md:w-[400px] w-[250px] z-0"
//           src="/discuss.png"
//           width={400}
//           height={300}
//           alt="discuss"
//         />
//         <div className="absolute top-6 right-6 flex gap-4 z-20 animate-floating">A
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition"
//           >
//             <i className="text-[#1DA1F2] text-2xl">
//               <FaTwitterSquare />
//             </i>
//           </a>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition"
//           >
//             <i className="text-[#4267B2] text-2xl">
//               <FaFacebookF />
//             </i>
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition"
//           >
//             <i className="text-[#E1306C] text-2xl">
//               <FaInstagram />
//             </i>
//           </a>
//         </div>
//       </section>
//       <main className="w-5/6 m-auto flex-col md:flex md:flex-row   items-center py-16">
//         <div className="w-[80%] text-center md:w-[60%] m-auto md:text-start ">
//           <h1 className=" text-5xl mt-12 font-bold text-[#323743FF]">
//             About Simply Coder
//           </h1>
//           <Image
//             className="mx-auto md:m-0 "
//             src={"/about.png"}
//             width={247}
//             height={24}
//             alt="about"
//           />
//           <p className="mx-auto md:mx-0 w-[90%] sm:w-[80%] text-[20px] leading-[30px] font-normal text-[#323743]">
//             Simply Coder is a smart, AI-enabled platform that offers a growing
//             suite of daily-use tools designed to save your time and boost your
//             creativity. Whether you &apos; re a student, content creator, or
//             developer, our intuitive tools — like caption generators, status
//             creators, and more — help you get things done faster and better.
//             Built with simplicity and speed in mind, Simply Coder is your go-to
//             digital toolkit — always accessible, always free.
//           </p>
//           <button className="group relative inline-flex items-center px-8 py-4 pr-10 bg-white rounded-full font-semibold transition-all duration-300 hover:pr-12 mt-8 border-2 border-gray-300 text-lg">
//             <span className="mr-2 bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent">
//               Learn more..
//               <span className="absolute right-4 opacity-0 transform translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#CA33FF] text-2xl">
//                 →
//               </span>
//             </span>
//           </button>
//         </div>
//         <div className="relative w-full max-w-md mx-auto aspect-[3/4] sm:aspect-[4/5]">
//           {/* SVG Blob Background */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 200 200"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <path
//               fill="#CA33FF"
//               d="M49.2,-62C59.7,-49.8,61.5,-30.5,63.3,-12.3C65.1,5.8,67,22.8,60.1,34.6C53.2,46.5,37.5,53.1,21.8,57.9C6.2,62.7,-9.4,65.6,-24.5,62.3C-39.7,59,-54.4,49.5,-64.6,35.5C-74.9,21.5,-80.6,3.2,-76.4,-12.3C-72.2,-27.7,-58.2,-40.2,-43.9,-51.7C-29.5,-63.3,-14.7,-73.8,2.3,-76.5C19.3,-79.3,38.7,-74.2,49.2,-62Z"
//               transform="translate(100 120)"
//             />
//           </svg>

//           {/* Girl Image */}
//           <Image
//             src="/girl.png"
//             alt="Girl Illustration"
//             fill
//             className="object-contain z-10 p-6"
//             priority
//           />

//           {/* White Box */}
//           <div className="absolute top-[25%] left-[-10%] w-[220px] h-[auto] bg-white z-20 rounded-2xl shadow-xl p-3">
//             <h3 className="text-lg font-bold text-[#CA33FF]">Features</h3>
//             <ul className="text-sm text-gray-700 space-y-2 list-none pl-0">
//               <li className="bg-pink-200 rounded-2xl px-4 py-2 font-bold text-pink-700">
//                 ⚡ Instant Captions & Statuses
//               </li>
//               <li className="bg-pink-200 rounded-2xl px-4 py-2 font-bold text-pink-700">
//                 🎨 AI-Powered Creativity Tools
//               </li>
//               <li className="bg-pink-200 rounded-2xl px-4 py-2 font-bold text-pink-700">
//                 🆓 100% Free & Effortless
//               </li>
//             </ul>
//           </div>
//         </div>
//       </main>
//       <main className="min-h-screen bg-gradient-to-br from-white to-purple-50 px-6 py-12 text-gray-800 font-sans">
//         <section className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-2xl">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
//             About Us
//           </h1>

//           <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//             <strong>Simply Coder</strong> was born out of a late-night coding
//             session and a vision to simplify digital creation. Our founder, a
//             self-taught developer and design enthusiast, wanted to build tools
//             that not only worked well but looked and felt delightful to use.
//           </p>

//           <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//             Tired of clunky interfaces and slow workflows, we set out to design
//             a web app that embraced minimalism and speed — where anyone could
//             generate catchy captions, bios, or statuses in seconds. No friction.
//             No fuss.
//           </p>

//           <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//             From hand-crafted UI with glassmorphism and soft gradients to
//             backend performance optimizations, every corner of Simply Coder
//             reflects our obsession with user experience. We believe good design
//             should feel invisible — guiding users effortlessly without
//             distraction.
//           </p>

//           <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//             With a growing user base and a community-driven roadmap, we're
//             committed to keeping our tools free, privacy-focused, and constantly
//             evolving with the latest in AI and UX trends.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             Simply Coder isn’t just a product — it’s a journey. One that’s
//             powered by curiosity, creativity, and you.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default page;

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Contact } from "lucide-react";
import ProfileCard from "../_component/ProfileCard";

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
      <Head>
        <title>About Simply Coder - AI-Powered Content Generation</title>
        <meta
          name="description"
          content="Learn more about Simply Coder, your AI-powered platform for generating engaging YouTube titles, descriptions, WhatsApp statuses, Instagram captions, and LinkedIn posts."
        />
      </Head>

      <main className={`py-16 ${backgroundColor} mt-20`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Hero Section */}
          <section className="mb-12 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 z-10">
              <h1
                className={`text-[#222121] text-4xl md:text-5xl font-extrabold ${primaryAccentColor} tracking-tight mb-4 fade-in delay-200`}
              >
                About <span className={`text-[#dd80ff]`}>Simply Coder</span> -
                Your AI Content Ally
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
                href="/features"
                className={`inline-block bg-${primaryAccentColor} hover:bg-${primaryAccentColor}-700 text-${buttonTextColor} font-semibold py-3 px-6 rounded-md shadow-md transition duration-300`}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Save Time & Effort",
                  desc: "Let our AI handle content creation so you can focus on what matters most — growing your presence.",
                },
                {
                  title: "Boost Engagement",
                  desc: "Craft content that connects with your audience and drives real interaction, not just impressions.",
                },
                {
                  title: "Consistent Branding",
                  desc: "Ensure your tone, style, and message stay unified across every platform and post.",
                },
                {
                  title: "Data-Driven Insights",
                  desc: "Built on continual learning, our AI evolves to give you better results with each use.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 
        rounded-2xl border border-purple-200 
        shadow-md hover:shadow-2xl hover:shadow-purple-300/40 
        p-6 transition-all duration-300 overflow-hidden"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Purple Glow Accent Background */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-10 rounded-3xl blur-xl pointer-events-none" />

                  {/* Card Content */}
                  <div className="relative z-10  ">
                    <h3 className="text-lg text-[#8a61b0] font-semibold  mb-2 group-hover:text-purple-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md transition duration-300 text-center relative"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div
                  className={`absolute inset-0 z-0 bg-gradient-to-br from-red-500 to-rose-600 opacity-10 rounded-3xl blur-xl`}
                ></div>
                <Image
                  src="/yt.png"
                  alt="YouTube"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <h3
                  className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}
                >
                  YouTube Mastery
                </h3>
                <p className={`text-gray-700 leading-relaxed text-sm`}>
                  Generate compelling titles and SEO-friendly descriptions that
                  boost your video&apos;s visibility.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md transition duration-300 text-center relative"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div
                  className={`absolute inset-0 z-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-10 rounded-3xl blur-xl`}
                ></div>
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <h3
                  className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}
                >
                  Engaging WhatsApp Statuses
                </h3>
                <p className={`text-gray-700 leading-relaxed text-sm`}>
                  Craft creative and attention-grabbing updates to connect with
                  your contacts.
                </p>
              </motion.div>
              <motion.div
                className="relative p-6 bg-white rounded-lg shadow-md transition duration-300 text-center"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div
                  className={`absolute inset-0 z-0 bg-gradient-to-br from-pink-500 to-fuchsia-600 opacity-10 rounded-3xl blur-xl`}
                ></div>
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <h3
                  className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}
                >
                  Captivating Instagram Captions
                </h3>
                <p className={`text-gray-700 leading-relaxed text-sm`}>
                  Generate creative and relevant captions that drive engagement
                  on your posts.
                </p>
              </motion.div>
              <motion.div
                className=" relative p-6 bg-white rounded-lg shadow-md transition duration-300 text-center"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div
                  className={`absolute inset-0 z-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-10 rounded-3xl blur-xl`}
                ></div>
                <Image
                  src="/ln.png"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <h3
                  className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}
                >
                  Impactful LinkedIn Posts
                </h3>
                <p className={`text-gray-700 leading-relaxed text-sm`}>
                  Create professional and engaging content to expand your
                  network and share your expertise.
                </p>
              </motion.div>
            </div>
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
