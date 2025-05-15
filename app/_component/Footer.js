import { Fuzzy_Bubbles } from "next/font/google";

const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400"], // or '700' if you want bold
});

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-white/70 border-t border-gray-200  text-gray-800 py-10 px-6 md:px-12 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1
            className={`${fuzzy.className} text-xl font-bold bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent sm:text-xl`}
          >
            <b> &lt;Simply Coder/&gt;</b>
          </h1>
          <p className="text-sm text-gray-700">
            Creative tools made simple. AI-powered, fast, and free.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-700 mb-4">
            Get new tools and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/90 text-gray-800 placeholder-gray-500 px-4 py-2 rounded-lg w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Simply Coder. Built with ❤️ for
        creators.
      </div>
    </footer>
  );
};

export default Footer;
