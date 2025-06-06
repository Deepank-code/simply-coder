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
      <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-transparent rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-600 text-center mb-12">
          💼 Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-lg md:text-xl text-gray-800 leading-relaxed">
          {/* FAQ 1 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              🧠 What does the LinkedIn Post Generator do?
            </h3>
            <p>
              Our AI tool helps you craft{" "}
              <strong>professional, engaging LinkedIn posts</strong> — whether
              you&apos;re announcing a job change, sharing insights, or
              celebrating a milestone. No more writer’s block!
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              ✍️ What type of posts can I generate?
            </h3>
            <p>
              From{" "}
              <strong>career updates, personal branding, achievements,</strong>{" "}
              to <strong>industry opinions</strong> — Simply Coder generates
              impactful content that gets noticed by professionals and
              recruiters.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              🔐 Is my data safe?
            </h3>
            <p>
              Completely. We don’t collect or store any personal info. You can
              use the tool{" "}
              <strong>without logging in or sharing anything</strong>. Just
              input your topic and get a post instantly.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              ⚡ Is it optimized for LinkedIn’s tone and audience?
            </h3>
            <p>
              Yes! Our AI is tuned for{" "}
              <strong>professional tone, clarity, and impact</strong>. Whether
              you&lsquo;re aiming for motivation, thought leadership, or
              connection — it gets the LinkedIn voice right.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              🌐 Can I edit the content before posting?
            </h3>
            <p>
              Of course! Every post is editable. Use it as a{" "}
              <strong>starting point</strong> and tweak it to add your personal
              experience, voice, or company tone before publishing.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="group transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2 group-hover:underline">
              🆓 Is this tool free to use?
            </h3>
            <p>
              Yes, 100% <strong>free forever</strong>. No credit cards, no
              limits. We run minimal ads to keep the platform alive — so you can
              keep building your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
