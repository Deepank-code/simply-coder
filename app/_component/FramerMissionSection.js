"use client";
import { motion } from "framer-motion";

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

export default function FramerMissionSection() {
  const cardContent = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cardContent.map((item, index) => (
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
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-10 rounded-3xl blur-xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-lg text-[#8a61b0] font-semibold mb-2 group-hover:text-purple-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
