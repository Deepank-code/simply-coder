import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { format } from "date-fns";
import { notFound } from "next/navigation";

const postsDir = path.join(process.cwd(), "post-content", "js-series");

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default function JsSeriesPostPage({ params }) {
  const filePath = path.join(postsDir, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const htmlContent = marked(content); // convert MD to HTML

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-sm text-gray-500 mb-8">
        {format(new Date(data.date), "MMMM dd, yyyy")}
      </p>
      <article
        className="prose prose-yellow max-w-none markdown"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
