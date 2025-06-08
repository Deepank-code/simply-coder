import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "post-content");

export function getAllPosts() {
  const categories = ["ai-tools", "coding"];
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
  const categories = ["ai-tools", "coding"];

  for (let cat of categories) {
    const fullPath = path.join(contentDir, cat, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        slug,
        category: cat,
        metadata: data,
        content,
      };
    }
  }

  return null;
}
