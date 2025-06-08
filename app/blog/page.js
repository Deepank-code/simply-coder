import Link from "next/link";
import { getAllPosts } from "../_lib/getPosts";
import Image from "next/image";

export default function BlogList() {
  const posts = getAllPosts();

  const aiPosts = posts.filter((p) => p.category === "ai-tools");
  const codePosts = posts.filter((p) => p.category === "coding");

  const latestAi = aiPosts.slice(0, 5);
  const latestCode = codePosts.slice(0, 5);

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 5);

  return (
    <main className="flex flex-col lg:flex-row max-w-6xl mx-auto pt-32 px-6 bg-[#f8fafc] text-[#1e293b]">
      {/* Sidebar Navigation */}
      <aside
        className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:mr-8 p-4 bg-[#f1f5f9] rounded-xl shadow"
        aria-label="Blog categories"
      >
        <h2 className="text-xl font-bold mb-4">🗂️ Categories</h2>
        <ul className="space-y-6">
          <li>
            <a
              href="#ai-tools"
              className="text-blue-700 font-semibold hover:underline"
            >
              🤖 AI Tools
            </a>
            <ul className="mt-2 space-y-1 ml-4 text-sm">
              {latestAi.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {post.metadata.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a
              href="#coding"
              className="text-blue-700 font-semibold hover:underline"
            >
              💻 Coding Tutorials
            </a>
            <ul className="mt-2 space-y-1 ml-4 text-sm">
              {latestCode.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {post.metadata.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </aside>

      {/* Blog Content */}
      <section className="lg:w-3/4 w-full">
        {/* Latest Section */}
        <section id="latest" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🆕 Latest Posts</h2>
          <p className="mb-6 text-gray-700">
            Stay updated with our most recent posts across AI tools and coding
            tutorials.
          </p>
          <div className="grid gap-6">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
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
            {aiPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Coding Tutorials Section */}
        <section id="coding">
          <h2 className="text-2xl font-bold mb-4">💻 Coding Guides</h2>
          <p className="mb-6 text-gray-700">
            Learn web development with tutorials on APIs, tools, and hands-on
            coding practices.
          </p>
          <div className="grid gap-6">
            {codePosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function ArticleCard({ post }) {
  return (
    <article className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition border border-gray-200 flex flex-col md:flex-row gap-4">
      {/* Image */}
      {post.metadata.image && (
        <div className="w-full md:w-1/3 overflow-hidden rounded-md">
          <Image
            width={200}
            height={200}
            quality={40}
            src={post.metadata.image}
            alt={post.metadata.title}
            className="object-cover w-full h-32 md:h-40 rounded-md"
          />
        </div>
      )}

      {/* Text Content */}
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
