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
import Link from "next/link";

const Why = () => {
  return (
    <section id="why" className="xl-container relative pt-[5.5rem]">
      <div className="max-container">
        <div className="mx-4 lg:flex lg:gap-6 lg:items-start xl:gap-10">
          <div className="lg:w-1/2 border-2 flex flex-col gap-6 lg:justify-between">
            <div className=" bg-slate-300 rounded-xl p-6 flex flex-col text-dark-100">
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
            className="lg:w-1/2 order-first py-6 min-[900px]:py-0"
          />
        </div>
        <p className="text-center capitalize bold-content mt-6 mb-10 text-primary-700">
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
      <p className="p-6 bg-surface-mixed-200 rounded-xl font-light">
        {CTA_INTRO}
      </p>
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
        <Link
          href="https://react-losttracker.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            icon
            type="button"
            label="Add Missing Person"
            className="lg:order-first"
          />
        </Link>
      </div>
    </div>
  );
};

export const Map = () => {
  return (
    <>
      <div className="bg-slate-200 content-font text-[13px] md:text-[14px] py-2 text-dark-200">
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
      <div className="bg-slate-200 content-font text-[13px] md:text-[14px] py-2 text-dark-200">
        <div className="max-container">
          <p className="mx-4 text-right">{MAP_INFO}</p>
        </div>
      </div>
    </>
  );
};

export default Why;
