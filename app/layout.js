import { Amaranth } from "next/font/google";

import "./globals.css";
import Header from "./_component/Header";
import { Fuzzy_Bubbles } from "next/font/google";
import Footer from "./_component/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./_component/ScroolToTopBtn";

export const metadata = {
  title: {
    template: "%s | Simply Coder",
    default: "Free AI Tools for Social Media | Simply Coder",
  },
  description:
    "Boost your online presence with Simply Coder's free AI tools! Generate LinkedIn posts, WhatsApp statuses, YouTube descriptions, and Instagram bios in seconds. Dive deeper with our blog, featuring the latest AI tools and essential coding tutorials!",
  keywords: [
    "AI content generator",
    "free AI writing tools",
    "AI tools for social media",
    "LinkedIn post generator",
    "WhatsApp status ideas",
    "Instagram bio generator",
    "YouTube description generator",
    "trending AI tools blog",
    "coding tutorials with AI",
    "learn social media automation",
    "API coding guides",
    "Simply Coder app",
  ],
  openGraph: {
    title: "Free AI Social Media Tools | Simply Coder",
    description:
      "Generate high-quality social media content using our free AI tools. LinkedIn, WhatsApp, YouTube, Instagram—covered in one place.",
    url: "https://yourdomain.com/",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Social Media Tools | Simply Coder",
    description:
      "Create content instantly with our LinkedIn, WhatsApp, YouTube & Instagram generators. 100% free!",
  },

  other: {
    "google-adsense-account": "ca-pub-3386113365600048",
  },
};

const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400", "700"], // available weights
  variable: "--font-fuzzy",
});
const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amaranth",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3386113365600048"
          crossorigin="anonymous"
        ></script>
      </head>

      <body className={`${amaranth.className}`}>
        <Header />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            removeDelay: 1000,
          }}
        />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
