import WhatsAppCategoriesCard from "@/app/_component/WhatsAppCategoriesCard";
import { whatsAppCategories } from "@/app/_lib/db";

export const metadata = {
  title:
    "Best WhatsApp Status Collection | Funny, Birthday, Love, Attitude & More",
  description:
    "Browse our huge collection of WhatsApp statuses by category. Funny, birthday wishes, love, sad, motivational, and more — ready to copy and use instantly!",
  keywords: [
    "WhatsApp status categories",
    "funny WhatsApp status",
    "birthday WhatsApp wishes",
    "attitude status for WhatsApp",
    "motivational status",
    "prebuilt WhatsApp statuses",
  ],
  openGraph: {
    title: "WhatsApp Status Collection by Category | Simply Coder",
    description:
      "Get the best WhatsApp status messages organized by category — funny, love, sad, birthday & more. Just copy & share!",
    url: "https://yourdomain.com/whatsapp-status-library",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top WhatsApp Statuses by Category | Copy & Share",
    description:
      "Browse 1000+ prewritten WhatsApp statuses in multiple categories. Add spice to your status today!",
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
