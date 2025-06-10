import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "post-content");

export function getAllPosts() {
  const categories = ["ai-tools", "coding", "js-series"];
  let posts = [];

  categories.forEach((cat) => {
    const dirPath = path.join(contentDir, cat);
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);

      posts.push({
        slug,
        category: cat,
        metadata: data,
        content,
      });
    });
  });

  return posts.sort(
    (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
  );
}

export function getPostBySlug(slug) {
  const categories = ["ai-tools", "coding", "js-series"];

  for (let cat of categories) {
    const fullPath = path.join(contentDir, cat, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);

      const htmlContent = marked(content); // Convert markdown to HTML

      return {
        slug,
        category: cat,
        metadata: data,
        content: htmlContent, // now HTML, not raw markdown
      };
    }
  }

  return null;
}
