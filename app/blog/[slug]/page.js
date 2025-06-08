import { getPostBySlug } from "@/app/_lib/getPosts";
import { marked } from "marked";
import { notFound } from "next/navigation";

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto pt-32">
      {/* <h1 className="text-3xl font-bold">{post.metadata.title}</h1> */}
      <p className="text-sm text-gray-500">{post.metadata.date}</p>

      <div
        className="prose prose-slate max-w-none markdown"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  );
}
