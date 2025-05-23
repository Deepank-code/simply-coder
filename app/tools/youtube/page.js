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
    </section>
  );
}
