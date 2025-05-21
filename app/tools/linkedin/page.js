import LinkedinForm from "@/app/_component/LinkedinForm";

export const metadata = {
  title: "LinkedIn Post Generator | Simply Coder",
  description:
    "Write professional LinkedIn posts instantly using our AI-powered generator. Perfect for growth, networking & personal branding.",
  keywords: [
    "LinkedIn post ideas",
    "LinkedIn AI generator",
    "write LinkedIn post",
    "professional post tool",
    "Simply Coder LinkedIn",
  ],
  openGraph: {
    title: "LinkedIn Post Generator | Simply Coder",
    description:
      "Struggling with LinkedIn posts? Generate engaging content in seconds with Simply Coder.",
    url: "https://yourdomain.com/linkedin",
    siteName: "Simply Coder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI LinkedIn Post Generator",
    description: "Write impactful LinkedIn content easily with AI assistance.",
  },
};

export default function LinkedInContentForm() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-sky-100">
      <LinkedinForm />
    </section>
  );
}
