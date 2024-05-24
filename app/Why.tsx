"use client";

import {
  CTA_INTRO,
  CTA_TEXT,
  MAP_DATE,
  MAP_INFO,
  MAP_TEXT,
  persons,
  REASONS,
  WHY_SLOGANS,
} from "@/constant";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import MissingPersons from "../components/MissingPersons";

const Why = () => {
  return (
    <section id="why" className="xl-container relative pt-[5.5rem]">
      <div className="max-container">
        <div className="mx-4 lg:flex lg:justify-between xl:gap-10">
          <div className="lg:w-[40%] xl:w-1/2 border-2 flex flex-col gap-6 lg:justify-between">
            <div className=" bg-cream rounded-xl p-6 flex flex-col text-midnight">
              <Heading variant="header-dark" label="the reason" />

              <ul>
                {REASONS.map(({ reason }) => (
                  <p key={reason} className="my-6 content-size">
                    {reason}
                  </p>
                ))}
              </ul>

              <ul className="self-end text-right">
                {WHY_SLOGANS.map(({ label }) => (
                  <h3 key={label} className="mt-2 bold-content">
                    {label}
                  </h3>
                ))}
              </ul>
            </div>
            <CallToAction />
          </div>

          <MissingPersons
            missing={persons}
            className="lg:w-[55%] xl:w-1/2 order-first md:my-6 lg:my-0"
          />
        </div>
        <p className="text-center capitalize bold-content mt-6 mb-10">
          {MAP_TEXT}
        </p>
      </div>
      <Map />
    </section>
  );
};

export const CallToAction = () => {
  return (
    <div className="content-size pb-6 lg:pb-4 flex flex-col gap-6">
      <p className="p-6 bg-gray-70 rounded-xl font-light">{CTA_INTRO}</p>
      <p className="md:w-3/4 lg:w-full xl:w-3/4 text-center lg:text-left lg:self-start sm:self-center font-light">
        {CTA_TEXT}
      </p>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between md:flex-col md:items-center md:gap-6">
        <Image
          src="/Logo-light.svg"
          alt="LostInNL-logo"
          width={100}
          height={100}
          className="w-auto h-auto"
        />
        <Button
          icon
          type="button"
          label="Add Missing Person"
          className="lg:order-first"
          onClick={() => console.log("clicked")}
          // TODO: add routing
        />
      </div>
    </div>
  );
};

export const Map = () => {
  return (
    <>
      <div className="bg-gray-20 content-font text-[13px] md:text-[14px] py-2 text-midnight">
        <div className="max-container">
          <p className="mx-4">{MAP_DATE}</p>
        </div>
      </div>
      <Image
        src="/map.png"
        alt="map"
        width={800}
        height={100}
        className="w-full image-grayscale"
      />
      <div className="bg-gray-20 content-font text-[13px] md:text-[14px] py-2 text-midnight">
        <div className="max-container">
          <p className="mx-4 text-right">{MAP_INFO}</p>
        </div>
      </div>
    </>
  );
};

export default Why;
