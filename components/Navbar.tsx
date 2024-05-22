"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuUser2 } from "react-icons/lu";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import classNames from "classnames";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="xl-container z-40 bg-none fixed right-0 left-0 border-b-[1px] border-gray-20">
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
          <div className="max-lg:hidden flex items-center gap-6">
            <Navlinks parentStyle="flex items-center gap-6" linkStyle="links" />
            {/* Add AuthStatus */}

            <LuUser2 size={20} className="cursor-pointer" />
          </div>

          {/* Mobile button */}
          <div
            className="lg:hidden inline-block cursor-pointer z-10"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? (
              <IoCloseSharp size={30} className="text-cream" />
            ) : (
              <IoMenuSharp size={25} />
            )}
          </div>

          <div
            className={classnames({
              "mobile-menu": openMenu,
              "mobile-menu-close": !openMenu,
            })}
          >
            <div className="flex flex-col items-center gap-6">
              <Navlinks
                parentStyle="flex flex-col items-center gap-6"
                linkStyle="mobile-links"
              />
              <Link href="/" className="mobile-links">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

type StyleProps = {
  parentStyle?: string;
  linkStyle?: string;
};

const Navlinks = ({ parentStyle, linkStyle }: StyleProps) => {
  const currentPath = usePathname();

  return (
    <ul className={parentStyle}>
      {NAV_LINKS.map(({ label, href, key }) => (
        <li key={key}>
          <Link
            href={href}
            // className={classnames({
            //   "links": true,
            //   "!text-shadow-sm": href === currentPath,
            // })}
            className={linkStyle}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
