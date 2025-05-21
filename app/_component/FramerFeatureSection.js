"use Client";
import { motion } from "framer-motion";
import Image from "next/image";
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
const secondaryAccentColor = "#00bfa5"; // A teal for efficiency

const FramerFeatureSection = () => {
  return (
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
        <h3 className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}>
          YouTube Mastery
        </h3>
        <p className={`text-gray-700 leading-relaxed text-sm`}>
          Generate compelling titles and SEO-friendly descriptions that boost
          your video&apos;s visibility.
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
        <h3 className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}>
          Engaging WhatsApp Statuses
        </h3>
        <p className={`text-gray-700 leading-relaxed text-sm`}>
          Craft creative and attention-grabbing updates to connect with your
          contacts.
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
        <h3 className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}>
          Captivating Instagram Captions
        </h3>
        <p className={`text-gray-700 leading-relaxed text-sm`}>
          Generate creative and relevant captions that drive engagement on your
          posts.
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
        <h3 className={`text-xl font-semibold ${secondaryAccentColor} mb-2`}>
          Impactful LinkedIn Posts
        </h3>
        <p className={`text-gray-700 leading-relaxed text-sm`}>
          Create professional and engaging content to expand your network and
          share your expertise.
        </p>
      </motion.div>
    </div>
  );
};

export default FramerFeatureSection;
