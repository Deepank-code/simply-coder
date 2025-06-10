// app/sitemap.ts
import { contentData } from "./_lib/contentData";
import { getAllMarkdownPosts } from "./_lib/getAllMarkdownPost";

async function getAllContentSlugs() {
  return Object.keys(contentData);
}

export default async function sitemap() {
  // From contentData object
  const dynamicSlugs = await getAllContentSlugs();

  const dynamicUrls = dynamicSlugs.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}content/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  // From Markdown posts
  const markdownPosts = await getAllMarkdownPosts();

  const blogUrls = markdownPosts.map(({ slug, category }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${category}/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: "2025-05-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}about`,
      lastModified: "2025-05-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools`,
      lastModified: "2025-05-02",
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy`,
      lastModified: "2025-05-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}contact`,
      lastModified: "2025-05-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/whatsapp`,
      lastModified: "2025-05-03",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/whatsapp/whatsapp-status-categories`,
      lastModified: "2025-05-02",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/instagram`,
      lastModified: "2025-05-02",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/instagram/instagram-caption-categories`,
      lastModified: "2025-05-02",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/linkedin`,
      lastModified: "2025-05-04",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/youtube`,
      lastModified: "2025-05-06",
    },
    ...dynamicUrls, // from contentData
    ...blogUrls, // from Markdown
  ];
}
