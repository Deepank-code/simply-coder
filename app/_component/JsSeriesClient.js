"use client";

import { useState } from "react";
import Link from "next/link";

export default function JsSeriesClient({ posts }) {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      <div className="grid gap-6">
        {currentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/js-series/${post.slug}`}
            className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-1">
              {post.metadata.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">{post.metadata.date}</p>
            <p className="text-gray-700 line-clamp-2">
              {post.metadata.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white border-gray-300 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
}
