import Image from "next/image";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import ContactForm from "../_component/ContactForm";

const page = () => {
  return (
    <div>
      <section className="h-[400px] w-full relative mt-10 flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-[#dd80ff] text-center">
            Drop Us a Line
          </h1>
          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-7 list-none">
            <li className="flex items-center gap-2">
              <span>
                <FaLocationArrow style={{ color: "#dd80ff" }} />
              </span>
              Pithoragarh,Uttarakhand
            </li>
            <li className="flex items-center gap-2">
              <span>
                <FaMailBulk style={{ color: "#dd80ff" }} />{" "}
              </span>
              Support@simplycoder.com
            </li>
          </ul>
        </div>
        <Image
          className="absolute w-[200px] top-[1%] left-[-5%]  sm:w-[300px]  sm:top-[10%] sm:left-[-2%] "
          width={300}
          height={300}
          src={"/curve1.png"}
          alt="curve1"
        />

        <Image
          className="absolute bottom-[-2%] right-[2%] sm:bottom-[-14%] sm:right-0%] w-[180px] sm:w-[300px]"
          width={300}
          height={300}
          src={"/curve2.png"}
          alt="curve2"
        />
      </section>
      <ContactForm />
    </div>
  );
};

export default page;
