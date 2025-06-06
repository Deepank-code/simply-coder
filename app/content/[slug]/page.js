import { notFound } from "next/navigation";
import { contentData } from "../../_lib/contentData";
import QuoteList from "@/app/_component/QuoteList";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = contentData[slug];

  if (!content) {
    return {
      title: "Content Not Found",
      description: "Sorry, we couldn't find the content you're looking for.",
    };
  }

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
  };
}

export const generateStaticParams = () => {
  return Object.keys(contentData).map((slug) => ({ slug }));
};

export default async function ContentPage({ params }) {
  const { slug } = await params;
  const content = contentData[slug];

  if (!content) return notFound();

  let themeKey;
  if (slug.includes("sad")) {
    themeKey = "sad";
  } else if (slug.includes("love")) {
    themeKey = "love";
  } else if (slug.includes("romantic")) {
    themeKey = "romantic";
  } else if (slug.includes("heartbroken")) {
    themeKey = "heartbroke";
  } else if (slug.includes("alone")) {
    themeKey = "alone";
  } else if (slug.includes("missing")) {
    themeKey = "missing";
  } else if (slug.includes("flirty")) {
    themeKey = "flirty";
  } else if (slug.includes("attitude")) {
    themeKey = "attitude";
  } else if (slug.includes("emotional")) {
    themeKey = "emotional";
  } else if (slug.includes("night")) {
    themeKey = "goodNight";
  } else if (slug.includes("morning")) {
    themeKey = "goodMorning";
  } else if (slug.includes("motivation")) {
    themeKey = "motivation";
  } else if (slug.includes("one-liners")) {
    themeKey = "punchlines";
  } else if (slug.includes("funny")) {
    themeKey = "funny";
  } else if (slug.includes("savage")) {
    themeKey = "savage";
  } else if (slug.includes("hindi")) {
    themeKey = "hindiShayari";
  } else {
    themeKey = "default";
  }

  return <QuoteList content={content} themeKey={themeKey} />;
}
