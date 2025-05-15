"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Simply Coder makes caption writing a breeze. I use it every day for my posts. Love the minimal design and the speed!",
    name: "Priya S.",
    role: "Content Creator",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Priya+S&background=random&rounded=true",
    bg: "bg-[#FFF7F1]",
  },
  {
    text: "As a dev, I appreciate tools that just work. This one’s fast, intuitive, and super helpful when I’m stuck on text.",
    name: "Arjun M.",
    role: "Frontend Developer",
    rating: 4,
    image:
      "https://ui-avatars.com/api/?name=Arjun+M&background=random&rounded=true",
    bg: "bg-[#FFCED6]",
  },
  {
    text: "It’s like having a tiny creative assistant in my pocket. Makes captions, bios, and even quirky statuses in seconds.",
    name: "Tanya R.",
    role: "Social Media Marketer",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Tanya+R&background=random&rounded=true",
    bg: "bg-[#E8E8FD]",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < count ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
        }`}
      />
    ));

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-10">
          Real feedback from creators, developers, and everyday users.
        </p>

        <div className="relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`p-6 sm:p-8 rounded-2xl shadow-md text-left max-w-xl mx-auto ${testimonials[index].bg}`}
            >
              <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                “{testimonials[index].text}”
              </p>
              <div className="flex items-center mb-2">
                {renderStars(testimonials[index].rating)}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[index].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
