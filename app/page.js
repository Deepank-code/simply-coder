import Image from "next/image";
import TestimonialSlider from "./_component/TestimonialSlider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="w-full h-screen bg-gradient-to-t from-[#fad0c4] to-[#ffd1ff] flex justify-center items-center relative overflow-hidden">
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-t from-[#a077ff] to-[#ff3ec8] bg-clip-text text-transparent leading-tight">
            Smart Tools That Save Your Time & Boost Your Creativity
          </h1>
          <Link
            href={"/tools"}
            className="group relative inline-flex items-center px-8 py-4 pr-10 bg-white rounded-full font-semibold transition-all duration-300 hover:pr-12 mt-8 border-2 border-gray-300 text-lg"
          >
            <span className="mr-2 bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent">
              Get Started
            </span>
            <span className="absolute right-4 opacity-0 transform translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#CA33FF] text-2xl">
              →
            </span>
          </Link>
        </div>

        {/* Bubble Images */}
        <Image
          src="/one.png"
          alt="bubble"
          width={100}
          height={100}
          className="absolute top-[15%] right-[18%] w-[60px] sm:w-[90px] md:w-[100px] rounded-full z-0"
        />
        <Image
          src="/two.png"
          alt="bubble"
          width={90}
          height={90}
          className="absolute bottom-[40%] left-[18%] w-[55px] sm:w-[70px] md:w-[90px] rounded-full z-0"
        />
        <Image
          src="/three.png"
          alt="bubble"
          width={220}
          height={220}
          className="absolute top-[60%] right-[5%] w-[100px] sm:w-[160px] md:w-[220px] rounded-full z-0"
        />
        <Image
          src="/four.png"
          alt="bubble"
          width={130}
          height={130}
          className="absolute bottom-[12%] right-[28%] w-[80px] sm:w-[100px] md:w-[130px] rounded-full z-0"
        />
        <Image
          src="/five.png"
          alt="bubble"
          width={80}
          height={80}
          className="absolute top-[18%] left-[12%] w-[50px] sm:w-[60px] md:w-[80px] rounded-full z-0"
        />
        <Image
          src="/six.png"
          alt="bubble"
          width={200}
          height={200}
          className="absolute top-[70%] left-[10%] w-[100px] sm:w-[150px] md:w-[200px] rounded-full z-0"
        />
      </section>

      <main className="w-full sm:w-5/6 m-auto flex-col md:flex md:flex-row   items-center py-16">
        <div className="w-[80%] text-center md:w-[60%] m-auto md:text-start ">
          <h1 className="text-3xl sm:text-5xl mt-12 font-bold text-[#323743FF]">
            About Simply Coder
          </h1>
          <Image
            className="m-auto sm:m-0"
            src={"/about.png"}
            width={247}
            height={24}
            alt="about"
          />
          <p className=" m-auto md:ms-0 w-[100%] sm:w-[80%] text-[20px] leading-[30px] font-normal text-[#323743]">
            Simply Coder is a smart, AI-enabled platform that offers a growing
            suite of daily-use tools designed to save your time and boost your
            creativity. Whether you &apos; re a student, content creator, or
            developer, our intuitive tools — like caption generators, status
            creators, and more — help you get things done faster and better.
            Built with simplicity and speed in mind, Simply Coder is your go-to
            digital toolkit — always accessible, always free.
          </p>
          <Link
            href={"/about"}
            className="group relative inline-flex items-center px-8 py-4 pr-10 bg-white rounded-full font-semibold transition-all duration-300 hover:pr-12 mt-8 border-2 border-gray-300 text-lg"
          >
            <span className="mr-2 bg-gradient-to-r from-[#4D8FFB] to-[#CA33FF] bg-clip-text text-transparent">
              Learn more..
              <span className="absolute right-4 opacity-0 transform translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#CA33FF] text-2xl">
                →
              </span>
            </span>
          </Link>
        </div>
        <div className="relative  w-full max-w-md mx-auto aspect-[3/4] sm:aspect-[4/5]">
          {/* SVG Blob Background */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="#CA33FF"
              d="M49.2,-62C59.7,-49.8,61.5,-30.5,63.3,-12.3C65.1,5.8,67,22.8,60.1,34.6C53.2,46.5,37.5,53.1,21.8,57.9C6.2,62.7,-9.4,65.6,-24.5,62.3C-39.7,59,-54.4,49.5,-64.6,35.5C-74.9,21.5,-80.6,3.2,-76.4,-12.3C-72.2,-27.7,-58.2,-40.2,-43.9,-51.7C-29.5,-63.3,-14.7,-73.8,2.3,-76.5C19.3,-79.3,38.7,-74.2,49.2,-62Z"
              transform="translate(100 120)"
            />
          </svg>

          {/* Girl Image */}
          <Image
            src="/girl.png"
            alt="Girl Illustration"
            fill
            className="object-contain ps-7 pt-  z-10 p-8"
            priority
          />

          {/* White Box */}
          <div className="absolute pt-7 w-[150px] top-[5%] left-[2%] sm:top-[25%] sm:left-[-20%] sm:w-[200px] h-[auto] bg-white z-20 rounded-2xl shadow-xl p-2">
            <h3 className="text-lg font-bold text-[#CA33FF]">Features</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-none pl-0">
              <li className="bg-pink-200 rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold text-pink-700 text-[11px] sm:text-[16px]">
                ⚡ Instant Captions & Statuses
              </li>
              <li className="bg-pink-200 rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold text-pink-700 text-[11px] sm:text-[16px]">
                🎨 AI-Powered Creativity Tools
              </li>
              <li className="bg-pink-200 rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold text-pink-700 text-[11px] sm:text-[16px]">
                🆓 100% Free & <br />
                Effortless
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* <section className="w-5/6 h-[600px]  m-auto grid md:grid-cols-3 gap-5">
        <div className=" bg-[#FFF7F1] rounded-2xl relative w-[100%] h-[300px] m-auto col-span-*">
          <div className="px-8 pt-11 ">
            <h2 className="text-[24px] font-bold text-gray-900">
              🧠 AI-Powered Creativity
            </h2>
            <p className="text-[20px] text-gray-700">
              Unlock smarter ways to create with our AI-driven tools. Whether
              you&apos;re looking for the perfect caption, bio, or status, our
              intelligent algorithms deliver fresh and relevant content that
              matches your style — instantly and effortlessly.
            </p>
          </div>
          <Image
            className="absolute right-[2%] bottom-[4%]"
            width={150}
            height={150}
            src={"/feature-ai.png"}
            alt="ai"
          />
        </div>
        <article className="bg-[#FFCED6FF] rounded-2xl col-span-2">
          <h2 className="text-[24px] font-bold text-gray-900">
            ⚡ One-Click Copy & Share
          </h2>
          <p>
            Speed matters. With our seamless one-click copy and share feature,
            you can quickly grab your generated text and push it to social
            media, messages, or wherever you need it — saving you time and
            effort every time.
          </p>
        </article>
        <article className="bg-[#D2D1F0FF] col-span-2 rounded-2xl">3</article>
        <article className="bg-[#FFFAE4FF] rounded-2xl">4</article>
      </section> */}
      <section className="w-5/6 h-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
        {/* Box 1 */}
        <div className="bg-[#FFF7F1] rounded-2xl relative w-full h-auto p-5 md:p-6 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-[24px] font-bold text-gray-900">
              🧠 AI-Powered Creativity
            </h2>
            <p className="text-[18px] text-gray-700 mt-2">
              Unlock smarter ways to create with our AI-driven tools. Whether
              you&apos;re looking for the perfect caption, bio, or status, our
              intelligent algorithms deliver content that matches your style —
              instantly and effortlessly.
            </p>
          </div>
          <Image
            className="absolute opacity-50 right-4 bottom-4 "
            width={120}
            height={120}
            src="/feature-ai.png"
            alt="ai"
          />
        </div>

        {/* Box 2 */}
        <article className="bg-[#FFCED6FF] rounded-2xl md:col-span-2  flex-col   relative w-full h-auto p-5 md:p-6 flex ">
          <div>
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              ⚡ One-Click Copy & Share
            </h2>
            <p className="text-[18px] text-gray-700">
              Speed matters. With our seamless one-click copy and share feature,
              you can quickly grab your generated text and share it anywhere —
              saving you time every time.
            </p>
          </div>
          <Image
            className="absolute opacity-70 right-4 bottom-4"
            width={150}
            height={150}
            src="/feature-media.png"
            alt="ai"
          />
        </article>

        {/* Box 3 */}
        <article className="bg-[#D2D1F0FF] rounded-2xl md:col-span-2  flex-col   relative w-full h-auto p-5 md:p-6 flex">
          <div>
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              🎨 Beautifully Simple UI
            </h2>
            <p className="text-[18px] text-gray-700">
              No clutter. No confusion. Our interface is designed to be visually
              clean and intuitive, so you can focus on creating without
              distractions. Everything is right where you need it — accessible,
              responsive, and effortless to use.
            </p>
          </div>
          <Image
            className="opacity-50 absolute right-4 bottom-4"
            width={150}
            height={150}
            src="/feature-media2.png"
            alt="ai"
          />
        </article>

        {/* Box 4 */}
        <article className="bg-[#FFFAE4FF] rounded-2xl   relative w-full h-auto p-5 md:p-6 flex ">
          <div>
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              📱 Mobile-Friendly Tools
            </h2>
            <p className="text-[18px] text-gray-700">
              Use it anytime, anywhere. Our tools are fully optimized for mobile
              devices so you can create content, generate ideas, or copy text
              whether you&apos;re on the go or chilling at home.
            </p>
          </div>
          <Image
            className="absolute right-4 bottom-4 opacity-50"
            width={150}
            height={150}
            src="/smartphone.png"
            alt="ai"
          />
        </article>
      </section>
      <TestimonialSlider />
    </div>
  );
}
