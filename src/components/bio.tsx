import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

import bioImg from "../../public/img/mike.png";

export const Bio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-red-50 p-10">
      <div className="col-span-1 md:grid-cols-2  p-px">
        <Image src={bioImg} alt="Description of image" width={150} />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold">Mike Armstrong, CPACC</h2>
        <p>
          As a colorblind individual with over 20 years experience in
          technology, I have a unique perspective on UX, production, remediation
          strategies and tactics to meet accessibility guidelines. I obtained my
          Certified Professional in Accessibility Core Competencies (CPACC) in
          late 2023 and have audited and/or remediated hundreds of digital
          assets. I am a strong advocate for a shift-left approach in accessible
          product development, and can help you and your team formulate an
          efficient plan to reach your accessibilty goals.
        </p>
        <p className="pt-5">
          Drop me a line and find out how I can partner with you and your
          business to build a more accessible world.
        </p>
      </div>
    </div>
  );
};
