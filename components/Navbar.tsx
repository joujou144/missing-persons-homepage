"use client";

import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [bgStyle, setBgStyle] = useState(
    "bg-transparent border-b-[1px] border-gray-20"
  );

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setBgStyle("bg-cream shadow-md shadow-gray-20");
      } else {
        setBgStyle("bg-transparent border-b-[1px] border-gray-20");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`${bgStyle} xl-container z-40 fixed right-0 left-0  ease-in duration-300`}
    >
      <div className="max-container py-6">
        <div className="flexBetween mx-4">
          <Link href="/">
            <Image
              src="/Logo-dark.svg"
              alt="LostInNL-logo"
              width={100}
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
