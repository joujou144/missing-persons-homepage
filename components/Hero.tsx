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
    <section className="max-container py-52 lg:py-64 xl:py-[280px] mt-4 relative">
      <div className="z-10 absolute inset-0 bg-black opacity-40 rounded-b-xl"></div>
      <Image
        src="/hero.jpg"
        alt="background image"
        fill={true}
        objectFit="cover"
        className="rounded-xl"
      />

      <div className="padding-container w-fit md:w-3/4 lg:w-[60%] xl:w-[45%] flex flex-col items-start gap-4 xl:items-center xl:text-center xl:mx-auto">
        <h1 className="z-20 bold-18 md:bold-32 xl:bold-52">
          LostInNL Missing Persons
        </h1>
        <p className="z-20 text-[14px] md:text-[18px]">
          We store and disseminate information about individuals who go missing
          in Newfoundland.
        </p>
        <Button
          label="Add Missing Person"
          icon={<PiPlusBold />}
          type="button"
          className="z-20 text-center text-[14px] xl:text-[16px]"
          variant="btn-outline-light"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Hero;
