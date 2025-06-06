"use client";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function ToolsSection() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-pink-50 to-purple-100">
        <section className="w-full pt-20 px-6 ">
          <div className="max-w-6xl mx-auto text-center mb-12 mt-11">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              ✨ Explore Our Tools
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Free AI-powered helpers to boost your social media creativity —
              easy, fast, and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ToolCard
              icon={<FaWhatsapp size={30} />}
              title="WhatsApp Status"
              color="from-green-400 to-emerald-500"
              desc="Generate clever and viral statuses in seconds. Choose from moods like romantic, funny, sad, or motivational — updated daily."
              route="/tools/whatsapp"
              features={[
                "One-click copy",
                "Trending styles",
                "Status length control",
              ]}
            />
            <ToolCard
              icon={<FaInstagram size={30} />}
              title="Instagram Captions"
              color="from-pink-500 to-fuchsia-600"
              desc="Level up your captions with AI-powered flair. Get witty, poetic, aesthetic, or bold captions that match your mood or image."
              route="/tools/instagram"
              features={[
                "Hashtag suggestions",
                "Emoji matching",
                "Tone presets",
              ]}
            />
            <ToolCard
              icon={<FaLinkedin size={30} />}
              title="LinkedIn Headlines"
              color="from-sky-500 to-blue-600"
              desc="Craft professional, polished headlines & bios. Stand out with clarity and confidence — perfect for job seekers and entrepreneurs."
              features={[
                "Professional tone",
                "CTA prompts",
                "Buzzword optimizer",
              ]}
              route="/tools/linkedin"
            />
            <ToolCard
              icon={<FaYoutube size={30} />}
              title="YouTube Ideas"
              color="from-red-500 to-rose-600"
              desc="Get fresh titles, hooks, and descriptions for videos. Whether it's tutorials, vlogs, or shorts — let AI supercharge your script."
              route="/tools/youtube"
              features={[
                "Hook generator",
                "SEO-optimized titles",
                "Niche-based suggestions",
              ]}
            />
          </div>
        </section>
        <section className="w-full py-5 px-6 ">
          <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-transparent rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-800 text-center mb-12">
              🤖 Frequently Asked Questions
            </h2>

            <div className="space-y-10 text-lg md:text-xl text-gray-800 leading-relaxed">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
                  1. What can I do with Simply Coder’s AI tools?
                </h3>
                <p>
                  Our tools help you create high-quality content for platforms
                  like WhatsApp, Instagram, LinkedIn, and YouTube. You can
                  generate statuses, captions, bios, headlines, and more — all
                  with a single click.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
                  2. Are the tools really free to use?
                </h3>
                <p>
                  Yes! Every tool is 100% free. You don’t need to log in, sign
                  up, or pay to access any of our features. We&apos;re committed
                  to keeping these tools accessible to everyone.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
                  3. How many AI prompts can I use per day?
                </h3>
                <p>
                  You can enjoy <strong>4 free AI prompts daily</strong> for
                  each tool. It&apos;s a simple way to explore multiple ideas
                  and get the perfect content faster.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
                  4. Can I explore prewritten content too?
                </h3>
                <p>
                  Absolutely. Along with AI-generated content, you can browse a
                  large collection of{" "}
                  <strong>
                    ready-made statuses, bios, captions, and headlines
                  </strong>{" "}
                  — all categorized by type, emotion, and platform.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
                  5. Will the tools work on other platforms too?
                </h3>
                <p>
                  Yes! You can repurpose the content for other platforms like
                  Threads, Facebook, X (Twitter), YouTube Shorts, blogs, or even
                  personal bios and messages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

function ToolCard({ icon, title, color, desc, features, route }) {
  const router = useRouter();
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-6 flex flex-col items-center shadow-lg overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-2xl group">
      {/* Background Accent Gradient */}
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-br ${color} opacity-10 rounded-3xl blur-xl`}
      ></div>

      {/* Top Icon */}
      <div
        className={`z-10 w-14 h-14 flex items-center justify-center bg-gradient-to-br ${color} rounded-full shadow-md text-white mb-4`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="z-10 text-lg md:text-xl font-bold text-gray-800 group-hover:text-purple-700 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="z-10 mt-2 text-sm text-gray-600 text-center">{desc}</p>

      {/* Features List */}
      <ul className="z-10 mt-4 space-y-1 text-sm text-gray-500">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-start gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className="group relative inline-flex items-center px-4 py-1  bg-white rounded-full font-semibold transition-all duration-300 hover:translate-x-2  mt-8 border-2 border-gray-300 text-lg"
        onClick={() => router.push(route)}
      >
        <span className="mr-2 bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent">
          Try Now..
        </span>
      </button>
    </div>
  );
}
