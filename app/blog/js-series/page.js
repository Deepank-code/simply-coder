// File: app/blog/js-series/page.js

import { getAllPosts } from "@/app/_lib/getPosts";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "JavaScript Series",
  description:
    "Explore our complete JavaScript Series — beginner to advanced guides with real-world use cases.",
};

const POSTS_PER_PAGE = 5;

export default function JsSeriesPage({ searchParams }) {
  const allPosts = getAllPosts();
  const jsSeriesPosts = allPosts
    .filter((p) => p.category === "js-series")
    .sort((a, b) => new Date(a.metadata.date) - new Date(b.metadata.date));

  const currentPage = parseInt(searchParams?.page || "1");
  const totalPages = Math.ceil(jsSeriesPosts.length / POSTS_PER_PAGE);

  if (currentPage < 1 || currentPage > totalPages) {
    redirect("/blog/js-series?page=1");
  }

  const paginatedPosts = jsSeriesPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen px-6 py-28 bg-gradient-to-br from-[#fffbea] via-[#fffdf3] to-[#fffce1] text-[#1f2937]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-700">
          📘 JavaScript Series
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          A step-by-step guide to mastering JavaScript — from the very basics to
          advanced techniques. Perfect for learners at every stage.
        </p>

        {/* Posts */}
        <div className="grid gap-6">
          {paginatedPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/js-series/${post.slug}`}
              className="group flex gap-4 items-start bg-white border border-yellow-100 p-4 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {/* Serial Number */}
              <div className="text-3xl font-bold text-yellow-500 leading-none w-10">
                {String(
                  (currentPage - 1) * POSTS_PER_PAGE + index + 1
                ).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-yellow-800 mb-1 group-hover:underline">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {post.metadata.date}
                </p>
                <p className="text-gray-700 line-clamp-2">
                  {post.metadata.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          {currentPage > 1 && (
            <Link
              href={`/blog/js-series?page=${currentPage - 1}`}
              className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
            >
              ← Previous
            </Link>
          )}
          {currentPage < totalPages && (
            <Link
              href={`/blog/js-series?page=${currentPage + 1}`}
              className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
