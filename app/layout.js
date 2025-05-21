import { Amaranth } from "next/font/google";

import "./globals.css";
import Header from "./_component/Header";
import { Fuzzy_Bubbles } from "next/font/google";
import Footer from "./_component/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s| Simply Coder",
    default: "Simply Coder",
  },
  description:
    "Simply Coder offers free AI tools to generate WhatsApp statuses, LinkedIn posts & more. Fast, simple, and made for creators.",
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
      </body>
    </html>
  );
}
