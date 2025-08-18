"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-blue-800 dark:text-gray-100">
            <span>
              <Image
                src="/img/a11y_Partners_logo.svg"
                width="300"
                alt="a11y partners logo"
                height="50"
              />
            </span>
          </span>
        </Link>
      </nav>
    </div>
  );
};
