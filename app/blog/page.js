import Link from "next/link";
import { getAllPosts } from "../_lib/getPosts";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";

export default function BlogList({ searchParams }) {
  const posts = getAllPosts();

  const aiLimit = parseInt(searchParams?.ai || "5");
  const codeLimit = parseInt(searchParams?.code || "5");
  const jsLimit = parseInt(searchParams?.js || "5");
  const aiPosts = posts
    .filter((p) => p.category === "ai-tools")
    .slice(0, aiLimit);
  const codePosts = posts
    .filter((p) => p.category === "coding")
    .slice(0, codeLimit);
  const jsPosts = posts
    .filter((p) => p.category === "js-series")
    .slice(0, jsLimit);

  const latestSorted = [...posts].sort(
    (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
  );

  const page = parseInt(searchParams?.page || "1");
  const pageSize = 5;
  const totalPages = Math.ceil(latestSorted.length / pageSize);
  const paginatedLatest = latestSorted.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="flex flex-col lg:flex-row max-w-6xl mx-auto pt-32 px-6 bg-[#f8fafc] text-[#1e293b]">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:mr-8 p-4 bg-[#f1f5f9] rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">🗂️ Categories</h2>
        <ul className="space-y-6">
          {/* AI Tools */}
          <li>
            <a
              href="#ai-tools"
              className="text-blue-700 font-semibold hover:underline"
            >
              🤖 AI Tools
            </a>
            <ul className="mt-2 space-y-1 ml-4 text-sm">
              {aiPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {post.metadata.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`?ai=${aiLimit + 3}&code=${codeLimit}&js=${jsLimit}`}
                  className="text-xs text-blue-500 hover:underline"
                >
                  + Load more
                </Link>
              </li>
            </ul>
          </li>

          {/* Coding */}
          <li>
            <a
              href="#coding"
              className="text-blue-700 font-semibold hover:underline"
            >
              💻 Coding Tutorials
            </a>
            <ul className="mt-2 space-y-1 ml-4 text-sm">
              {codePosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {post.metadata.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`?ai=${aiLimit}&code=${codeLimit + 3}&js=${jsLimit}`}
                  className="text-xs text-blue-500 hover:underline"
                >
                  + Load more
                </Link>
              </li>
            </ul>
          </li>

          {/* JS Series */}
          <li>
            <Link
              href="/blog/js-series"
              className="text-yellow-600 font-semibold hover:underline flex gap-2 items-center"
            >
              <IoLogoJavascript className="text-xl" /> JavaScript Series
            </Link>
            <ul className="mt-2 space-y-1 ml-4 text-sm">
              {jsPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/js-series/${post.slug}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {post.metadata.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`?ai=${aiLimit}&code=${codeLimit}&js=${jsLimit + 3}`}
                  className="text-xs text-blue-500 hover:underline"
                >
                  + Load more
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      {/* Main Blog Content */}
      <section className="lg:w-3/4 w-full">
        {/* Latest Section */}
        <section id="latest" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🆕 Latest Posts</h2>
          <p className="mb-6 text-gray-700">
            Stay updated with our most recent posts across AI tools and coding
            tutorials.
          </p>
          <div className="grid gap-6">
            {paginatedLatest.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <Link
              href={`?page=${page - 1}`}
              className={`px-4 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 ${
                page <= 1 ? "pointer-events-none opacity-50" : ""
              }`}
            >
              ← Previous
            </Link>
            <Link
              href={`?page=${page + 1}`}
              className={`px-4 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 ${
                page >= totalPages ? "pointer-events-none opacity-50" : ""
              }`}
            >
              Next →
            </Link>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="ai-tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🤖 Trending AI Tools</h2>
          <p className="mb-6 text-gray-700">
            Explore powerful and trending AI tools, each explained with
            practical examples and insights.
          </p>
          <div className="grid gap-6">
            {aiPosts.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Coding Section */}
        <section id="coding" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">💻 Coding Guides</h2>
          <p className="mb-6 text-gray-700">
            Learn web development with tutorials on APIs, tools, and hands-on
            coding practices.
          </p>
          <div className="grid gap-6">
            {codePosts.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* JS Series Section */}
        <section id="js-series" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">📘 JS Series</h2>
          <p className="mb-6 text-gray-700">
            Explore our deep-dive series on JavaScript fundamentals and advanced
            techniques.
          </p>
          <div className="grid gap-6">
            {jsPosts.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

// Card Component
function ArticleCard({ post }) {
  return (
    <article className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition border border-gray-200 flex flex-col md:flex-row gap-4">
      {post.metadata.image && (
        <div className="w-full md:w-1/3">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            width={300}
            height={180}
            quality={75}
            className="object-contain w-full h-[140px] md:h-[160px] rounded-md"
          />
        </div>
      )}

      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-blue-800 hover:underline mb-1">
            {post.metadata.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{post.metadata.date}</p>
        <p className="text-gray-700 line-clamp-3">
          {post.metadata.description}
        </p>
      </div>
    </article>
  );
}
