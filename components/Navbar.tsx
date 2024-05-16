"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuUser2 } from "react-icons/lu";
import React from "react";
import { NAV_LINKS } from "@/constant";
import classNames from "classnames";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="z-40 bg-cream padding-container flexBetween py-6 absolute right-0 left-0">
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
            // className={classNames({
            //   "nav-link": true,
            //   "!text-shadow-sm cursor-pointer": href === currentPath,
            // })}
            className="nav-link"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
