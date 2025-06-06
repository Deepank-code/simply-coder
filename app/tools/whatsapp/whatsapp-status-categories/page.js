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
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10">
          📚 WhatsApp Status by Category
        </h1>
        <p className="text-gray-700 text-xl mb-10">
          Find the perfect <strong>WhatsApp status</strong> to express your
          feelings and moments instantly. Whether you&lsquo;re celebrating a{" "}
          <strong>birthday 🎉</strong>, marking a{" "}
          <strong>marriage anniversary 💍</strong>, sharing your{" "}
          <strong>love ❤️</strong>, or seeking{" "}
          <strong>motivational quotes 🚀</strong>, our carefully curated
          WhatsApp statuses cover every emotion and theme. From heart-touching{" "}
          <strong>sad quotes 😢</strong> to fiery{" "}
          <strong>attitude updates 🔥</strong>, each category is packed with
          original, relatable content designed to make your messages stand out.
          Save time and energy — just browse, copy, and share your vibe with
          friends and family on WhatsApp.
        </p>

        <WhatsAppCategoriesCard categories={whatsAppCategories} />
      </div>
    </section>
  );
}
