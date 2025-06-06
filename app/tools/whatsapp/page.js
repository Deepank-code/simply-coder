import WhatsAppForm from "@/app/_component/WhatsAppForm";
import Link from "next/link";

export const metadata = {
  title: "AI WhatsApp Status Generator | Create Unique Status Instantly",
  description:
    "Generate unique, creative, and personalized WhatsApp statuses instantly using AI. Choose moods like love, sad, attitude, and funny. Free & easy to use!",
  keywords: [
    "AI WhatsApp status generator",
    "WhatsApp status ideas",
    "generate WhatsApp status",
    "funny love sad status",
    "AI WhatsApp tool",
    "Simply Coder WhatsApp generator",
  ],
  openGraph: {
    title: "AI WhatsApp Status Generator | Simply Coder",
    description:
      "Instantly generate fresh WhatsApp statuses using AI. Choose from love, sad, funny & attitude categories. Try now for free!",
    url: "https://yourdomain.com/whatsapp-status-generator",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI WhatsApp Status Generator | Free & Instant",
    description:
      "Create WhatsApp status messages instantly with AI. Love, sad, funny, or attitude — choose your mood!",
  },
};

export default function page() {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100  ">
      <WhatsAppForm />
      <div className="max-w-4xl mx-auto mt-20 px-6 py-12    ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-[17px] md:text-xl text-gray-800 leading-relaxed">
          {/* FAQ 1 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              💡 What is Simply Coder’s WhatsApp Status Generator?
            </h3>
            <p>
              <strong>Simply Coder</strong> brings you a smart, free AI tool to
              create stylish, expressive, and relatable WhatsApp statuses for
              any mood — 🤩 happy, 💔 sad, ❤️ romantic, 😂 funny, or ✨
              aesthetic. No thinking required — just click and copy!
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              🚀 How many statuses can I generate per day?
            </h3>
            <p>
              You get <strong>4 free AI-generated statuses</strong> per day —
              crafted by the powerful LLaMA 3.3 model. No login. No cost. Just
              pure creativity, delivered instantly!
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              📚 Can I browse ready-made status collections?
            </h3>
            <p>
              Absolutely! We’ve curated handpicked status collections for every
              vibe — <strong>Birthday, Love, Friendship, Aesthetic</strong> and
              more. Just browse, tap, and paste!
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              🌍 Can I use these on Instagram or Facebook too?
            </h3>
            <p>
              Definitely! These short texts double up as{" "}
              <strong>captions, bios, and one-liners</strong>
              for Instagram, Threads, Reels, and Facebook. One tool. Many
              platforms.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              🆓 Is the WhatsApp Status Generator really free?
            </h3>
            <p>
              Yes! 💯 It’s <strong>completely free</strong> to use forever. — no
              subscriptions, no hidden charges, ever.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 group-hover:underline">
              📲 Do I need to sign up to use the tool?
            </h3>
            <p>
              Not at all! Our tool is <strong>click & copy</strong> — no signup,
              no login, no hassle. Just pick your mood and get your status in
              seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
