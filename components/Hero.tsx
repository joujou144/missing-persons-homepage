"use client";

import React, { useState } from "react";
import Button from "./Button";
import { PiPlusBold } from "react-icons/pi";
import Image from "next/image";

const Hero = () => {
  //   const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("click");
  };

  return (
    <section className="max-container py-60 md:py-[270px] relative my-4">
      <Image
        src="/hero.jpg"
        alt="background image"
        fill={true}
        objectFit="cover"
        className="rounded-xl -z-10"
      />

      <div className=" flex flex-col items-start gap-4 text-midnight md:items-center md:text-center lg:max-w-[75%] md:max-w-[80%] mx-auto padding-container">
        <h1 className="bold-18 md:bold-32 xl:bold-52 max-md:text-shadow-sm shadow-white">
          LostInNL Missing Persons
        </h1>
        <p className="text-[14px] md:text-[18px] md:max-w-[72%]">
          We store and disseminate information about individuals who go missing
          in Newfoundland.
        </p>
        <Button
          label="Add Missing Person"
          icon={<PiPlusBold />}
          type="button"
          className="text-center text-[14px] xl:text-[16px]"
          variant="btn-dark"
          onClick={handleClick}
        />
      </div>

      {/* <p>Search. Hope. Find Them Alive.</p> */}
    </section>
  );
};

export default Hero;
