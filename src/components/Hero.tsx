import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/keyboard.jpg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-md dark:text-white">
              Comprehensive <br />
              <span className="text-blue-800">Digital Accessibility</span>{" "}
              <br />
              Solutions
            </h1>
            <p className="pr-6 text-xl leading-normal text-black lg:text-xl xl:text-2xl dark:text-gray-300">
              Helping organizations make their websites and documents accessible
              to all users – including those with disabilities. Providing expert
              assessments and solutions to ensure compliance with accessibility
              guidelines including WCAG, ADA, and EAA.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"rounded-xl"}
              alt=""
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
