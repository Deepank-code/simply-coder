import InstaForm from "@/app/_component/InstaForm";

export const metadata = {
  title:
    "AI Instagram Bio & Caption Generator | Create Unique IG Content Instantly",
  description:
    "Generate fresh, creative Instagram bios and captions instantly using AI. Select tone like funny, aesthetic, savage, or love — perfect for reels, posts, and stories!",
  keywords: [
    "Instagram caption generator",
    "AI Instagram bio tool",
    "unique IG captions",
    "funny Instagram bio",
    "aesthetic captions for reels",
    "Simply Coder tools",
  ],
  openGraph: {
    title: "AI Instagram Bio & Caption Generator | Simply Coder",
    description:
      "Create personalized Instagram bios and captions in seconds using AI. Choose your tone & vibe. Perfect for reels, posts, and profile bios!",
    url: "https://yourdomain.com/instagram-caption-generator",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Bio & Caption Generator with AI | Simply Coder",
    description:
      "Use AI to generate cool, witty, or aesthetic Instagram captions and bios. Get viral content in one click!",
  },
};

export default function InstaCaptionBioForm() {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-100">
      <InstaForm />
      <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-transparent rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
          💖 Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-lg md:text-xl text-gray-800 leading-relaxed">
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              💬 What does the Instagram Caption Generator do?
            </h3>
            <p>
              Our AI-powered tool helps you write the{" "}
              <strong>perfect caption or bio</strong> — whether you&apos;re
              posting a selfie, travel reel, meme, or brand story. Save time and
              boost engagement with one click!
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              🎨 Can I choose different caption styles?
            </h3>
            <p>
              Yes! Choose from <strong>aesthetic, funny, savage, love</strong>,
              or even <strong>motivational</strong> styles. Our tool matches
              your vibe and instantly generates content that clicks with your
              audience.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              🚀 Do I have to log in to use it?
            </h3>
            <p>
              Nope! Simply Coder’s Instagram generator is{" "}
              <strong>completely free and login-free</strong>. No sign-ups, no
              waiting — just generate and post.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              📱 Can I use these captions for Reels, Threads, or Facebook?
            </h3>
            <p>
              Absolutely! Our captions are great for Instagram Reels, Threads
              posts, Facebook updates, and even Pinterest pins.{" "}
              <strong>One tool, many uses</strong>.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              🔄 Can I generate bios too?
            </h3>
            <p>
              Yes! Our generator also creates catchy and stylish{" "}
              <strong>Instagram bios</strong> — aesthetic, professional, flirty,
              or even attitude-filled. Stand out in just a few words.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:underline">
              🆓 Is it 100% free?
            </h3>
            <p>
              Yes, 100% free to use. No signups, no payments, no ads (for now).
              Just quick, creative content when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
