// lib/getAllMarkdownPosts.ts
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "post-content");

export async function getAllMarkdownPosts() {
  const categories = fs.readdirSync(contentDir);

  const allPosts = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDir, category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const slug = file.replace(/\.md$/, "");
      allPosts.push({ slug, category });
    });
  });

  return allPosts;
}
