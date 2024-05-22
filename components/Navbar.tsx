"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuUser2 } from "react-icons/lu";
import React from "react";
import { NAV_LINKS } from "@/constant";
import clasnames from "classnames";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky max-w-[1350px] mx-auto z-40 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg right-0 left-0 top-4 rounded-full firefox:bg-opacity-90">
      <div className="max-container py-6">
        <div className="flexBetween mx-4">
          <Link href="/">
            <Image
              src="/Logo-dark.svg"
              alt="LostInNL-logo"
              width={80}
              height={30}
            />
          </Link>
          <div className="max-md:hidden flex items-center gap-6">
            <Navlinks />
            {/* Add AuthStatus */}

            <LuUser2 size={20} className="max-md:hidden block cursor-pointer" />
          </div>
          <IoMenuSharp
            size={25}
            className="md:hidden inline-block cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

const Navlinks = () => {
  const currentPath = usePathname();

  return (
    <ul className="flex items-center gap-6">
      {NAV_LINKS.map(({ label, href, key }) => (
        <li key={key}>
          <Link
            href={href}
            // className={classnames({
            //   "links": true,
            //   "!text-shadow-sm cursor-pointer": href === currentPath,
            // })}
            className="links"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
