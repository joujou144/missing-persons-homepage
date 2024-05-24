"use client";

import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [bgStyle, setBgStyle] = useState("nav-bg-default");
  const [navLogo, setNavLogo] = useState("/Logo-light.svg");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 150) {
        setBgStyle("nav-bg-onscroll");
        setNavLogo("/Logo-dark.svg");
      } else {
        setBgStyle("nav-bg-default");
        setNavLogo("/Logo-light.svg");
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
      className={`${bgStyle} z-40 fixed right-0 left-0 ease-in duration-300`}
    >
      <div className="max-container py-4">
        <div className="flexBetween mx-4">
          <Link href="/">
            <Image
              src={navLogo}
              alt="LostInNL-logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </Link>

          <Navlinks parentStyle="max-lg:hidden nav-menu" />
          {/* TODO: Add AuthStatus */}

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
              "nav-links": true,
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
        <Navlinks
          isMobile
          parentStyle="nav-menu-mobile"
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
