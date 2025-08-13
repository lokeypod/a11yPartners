import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero-2.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Your <br />
              <span className="text-blue-800">Accessibility</span> <br />
              Partners
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl dark:text-gray-300">
              We specialize in helping companies make their websites accessible
              to <strong>all</strong> users, including those with disabilities.
              We provide expert assessments and solutions to ensure compliance
              with accessibility standards such as WCAG, ADA, and EAA.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
