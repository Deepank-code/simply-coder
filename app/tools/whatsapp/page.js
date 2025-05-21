import WhatsAppForm from "@/app/_component/WhatsAppForm";

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
    </section>
  );
}
