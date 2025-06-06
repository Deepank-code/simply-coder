import { contentData } from "./_lib/contentData";

async function getAllContentSlugs() {
  return Object.keys(contentData);
}
export default async function sitemap() {
  const dynamicSlugs = await getAllContentSlugs();

  const dynamicUrls = dynamicSlugs.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}content/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.8,
    changeFrequency: "weekly",
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: "2025-5-2",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}about`,
      lastModified: "2025-5-2",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools`,
      lastModified: "2025-5-2",
      changeFrequency: "monthy",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy`,
      lastModified: "2025-5-2",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}contact`,
      lastModified: "2025-5-2",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/whatsapp`,
      lastModified: "2025-5-3",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/whatsapp/whatsapp-status-categories`,
      lastModified: "2025-5-2",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/instagram`,
      lastModified: "2025-5-2",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/instagram/instagram-caption-categories`,
      lastModified: "2025-5-2",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/linkedin`,
      lastModified: "2025-5-4",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/youtube`,
      lastModified: "2025-5-6",
    },
    ...dynamicUrls,
  ];
}
