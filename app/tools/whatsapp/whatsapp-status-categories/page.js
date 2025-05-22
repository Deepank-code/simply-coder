import WhatsAppCategoriesCard from "@/app/_component/WhatsAppCategoriesCard";
import { whatsAppCategories } from "@/app/_lib/db";

export const metadata = {
  title: "Top Quotes & Statuses: Motivational, Love, Funny, Birthday & More",
  description:
    "Explore a vast collection of quotes and statuses across categories like motivation, love, humor, birthday wishes, and more. Perfect for sharing on WhatsApp, Instagram, or any platform!",
  openGraph: {
    title: "Top Quotes & Statuses: Motivational, Love, Funny, Birthday & More",
    description:
      "Discover and share the best quotes and statuses across various categories. Ideal for WhatsApp, Instagram, and beyond.",
    url: "https://yourdomain.com/whatsapp-status-library",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Quotes & Statuses: Motivational, Love, Funny, Birthday & More",
    description:
      "Explore a diverse range of quotes and statuses to share on your favorite platforms.",
  },
};

export default function page() {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100 ">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-12">
          📚 WhatsApp Status by Category
        </h1>

        <WhatsAppCategoriesCard categories={whatsAppCategories} />
      </div>
    </section>
  );
}
