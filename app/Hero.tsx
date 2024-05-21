"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import Image from "next/image";

const Hero = () => {
  //   const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("click");
  };

  return (
    <section className="xl-container py-52 lg:py-64 xl:py-[280px] relative">
      <div className="z-10 absolute inset-0 bg-black opacity-40 "></div>
      <Image
        src="/hero.jpg"
        alt="background image"
        fill={true}
        objectFit="cover"
        className="bg-bottom"
      />

      <div className="mx-6 w-fit flex flex-col items-start gap-6 lg:items-center lg:text-center lg:mx-auto">
        <h1 className="z-20 bold-20 min-[380px]:bold-24 md:bold-32 xl:bold-40">
          LostInNL Missing Persons
        </h1>
        <p className="z-20 text-[14px] md:text-[18px] max-w-xs md:max-w-md lg:max-w-[55%] content-font tracking-wider">
          We store and disseminate information about individuals who go missing
          in Newfoundland.
        </p>
        <Button
          label="Add Missing Person"
          icon={true}
          type="button"
          className="z-20 text-center mt-2"
          variant="btn-outline-light"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Hero;
