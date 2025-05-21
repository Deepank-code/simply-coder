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
    </section>
  );
}
