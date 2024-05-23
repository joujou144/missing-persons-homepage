"use client";

import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const [bgStyle, setBgStyle] = useState(
    "bg-transparent border-b-[1px] border-gray-20"
  );

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 150) {
        setBgStyle("bg-cream shadow-md shadow-gray-20");
      } else {
        setBgStyle("bg-transparent border-b-[1px] border-gray-20");
      }
    };

    const handleScroll = () => {
      changeColor();
      if (window.scrollY === 0) {
        if (window.location.hash) {
          history.replaceState(null, "", " ");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${bgStyle} xl-container z-40 fixed right-0 left-0  ease-in duration-300`}
    >
      <div className="max-container py-4">
        <div className="flexBetween mx-4">
          <Link href="/">
            <Image
              src="/Logo-dark.svg"
              alt="LostInNL-logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </Link>
          <div className="max-lg:hidden nav-menu">
            <Navlinks parentStyle="nav-menu" />
            {/* TODO: Add AuthStatus */}

            <LuUser2 size={20} className="cursor-pointer" />
          </div>

          {/* Mobile button */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

type StyleProps = {
  parentStyle?: string;
  onClick?: () => void;
  isMobile?: boolean;
};

const Navlinks = ({ parentStyle, onClick, isMobile }: StyleProps) => {
  return (
    <ul className={parentStyle}>
      {NAV_LINKS.map(({ label, href, key }) => (
        <li key={key}>
          <Link
            onClick={onClick}
            href={href}
            className={classnames({
              links: true,
              "mobile-links": isMobile,
            })}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
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
        <div className="nav-menu flex-col">
          <Navlinks
            isMobile
            parentStyle="nav-menu flex-col"
            onClick={() => setOpenMenu(false)}
          />
          <Link href="/" className="mobile-links">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
