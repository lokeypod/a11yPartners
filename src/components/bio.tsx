import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

import bioImg from "../../public/img/mike.png";

export const Bio = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-1 p-px">
        <Image src={bioImg} alt="Description of image" width={150} />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold">Mike Armstrong</h2>
        <p>
          My passion for digital accessibility began during my time at
          advertising agencies, where I realized that many of our clients were
          overlooking a significant group of potential customers by creating
          inaccessible websites and applications. I carried this interest
          forward at Allstate Insurance, where I helped define production
          workflows, audit processes, and remediation strategies to ensure
          compliance with WCAG 2.1 AA guidelines. Most recently, at the
          University of Illinois Chicago (UIC), where I served as Senior
          Accessibility Specialist, I deepened my expertise in document auditing
          and remediation.
        </p>
        <p className="pt-5">
          Drop me a line and find out how I can partner with you and your
          business to build a more accessible world.
        </p>
        <p className="pt-5">
          <a
            href="mailto:mike@a11ypartners.com"
            className="underline text-blue-500"
          >
            Email Mike Armstrong
          </a>
        </p>
      </div>
    </div>
  );
};
