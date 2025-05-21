import InstaCategoriesCard from "@/app/_component/InstaCategoriesCard";
import { instaCategories } from "@/app/_lib/db";

export default function InstaCaptionCategoriesPage() {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-100">
      <InstaCategoriesCard categories={instaCategories} />
    </section>
  );
}
