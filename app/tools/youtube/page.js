import YoutubeForm from "@/app/_component/YoutubeForm";

export const metadata = {
  title: "YouTube Video Idea & Title Generator | Simply Coder",
  description:
    "Generate viral YouTube video ideas, attention-grabbing titles, and SEO-optimized descriptions in seconds. Perfect for creators, vloggers, marketers & influencers.",
  keywords: [
    "YouTube video ideas",
    "YouTube title generator",
    "SEO YouTube description",
    "YouTube content generator",
    "video idea generator",
    "viral video titles",
    "Simply Coder",
    "YouTube description tool",
    "YouTube SEO tool",
    "AI video content generator",
  ],
  openGraph: {
    title: "AI-Powered YouTube Content Generator | Simply Coder",
    description:
      "Struggling with content ideas? Instantly generate engaging YouTube topics, titles, and SEO descriptions with AI!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}youtube`,
    siteName: "Simply Coder",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-images/youtube-generator-preview.png",
        width: 1200,
        height: 630,
        alt: "YouTube Content Generator - Simply Coder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Generator | Get Ideas, Titles & Descriptions",
    description:
      "Create viral YouTube content ideas, titles, and SEO-rich descriptions using AI. Boost your channel's reach and engagement!",
    images: ["https://yourdomain.com/og-images/youtube-generator-preview.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com/youtube",
  },
};

export default function YouTubeContentForm() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-red-50 to-rose-100">
      <YoutubeForm />
      <div className="max-w-4xl mx-auto mt-20 px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 text-center mb-12 tracking-tight">
          🎥 YouTube Content Generator — FAQs
        </h2>

        <div className="space-y-10 text-[17px] md:text-xl text-gray-800 leading-relaxed">
          {/* FAQ 1 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              🔍 What does the YouTube Generator actually do?
            </h3>
            <p>
              This tool instantly generates catchy{" "}
              <strong>YouTube titles</strong>, SEO-friendly{" "}
              <strong>descriptions</strong>, and high-ranking
              <strong> tags</strong> — tailored for your content topic, niche,
              and audience. Just type your idea, and we’ll do the rest!
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              ⚡ How does it help with YouTube SEO?
            </h3>
            <p>
              Great question! Our AI is trained to create content that
              <strong> boosts visibility and click-through rate</strong>. From
              powerful keywords in titles to optimized tags and compelling
              descriptions — your videos become easier to find.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              ✍️ Can I customize the generated content?
            </h3>
            <p>
              Of course! The content is meant to inspire — feel free to
              <strong> edit, fine-tune, or copy as is</strong>. Add your
              personal touch before uploading it to your channel.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              📲 Do I need to sign in or create an account?
            </h3>
            <p>
              Nope! It’s a <strong>zero-login tool</strong>. No accounts, no
              emails — just visit the page, enter your video topic, and generate
              optimized content instantly.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              🆓 Is this YouTube Generator really free?
            </h3>
            <p>
              Yes, it’s completely free to use. We’re focused on helping
              creators right now — no cost, no login. We may add non-intrusive
              ads later to support ongoing development.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:underline">
              🎯 What kind of creators is this best for?
            </h3>
            <p>
              Whether you’re a <strong>vlogger, gamer, educator,</strong> or
              <strong> small business owner</strong> — this tool helps you stand
              out on YouTube. It’s designed for everyone looking to grow faster,
              smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
