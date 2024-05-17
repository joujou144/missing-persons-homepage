import React from "react";
import Pill from "./Pill";
import Image from "next/image";
import {
  ABOUT_HEADLINE,
  ABOUT_LEFT_CONTENT,
  ABOUT_RIGHT_CONTENT,
  ABOUT_SLOGANS,
  BOX_CONTENT,
} from "@/constant";

const About = () => {
  return (
    <section className="max-container py-4 lg:py-8">
      <div className="mx-4 flex flex-col gap-6">
        <Pill
          label="Who we are"
          variant="pill-light"
          className="padding-container self-start"
        />
        <h2 className="bold-16 md:bold-20 lg:bold-24">{ABOUT_HEADLINE}</h2>

        <div className="flex justify-between gap-20 font-size max-[950px]:flex-col max-[950px]:gap-10">
          <div className="flex flex-col gap-6 lg:justify-between lg:w-1/2">
            {ABOUT_LEFT_CONTENT.map(({ content }) => (
              <p key={content}>{content}</p>
            ))}

            <p className="bg-cream padding-container py-4 text-midnight rounded-xl">
              {BOX_CONTENT}
            </p>
          </div>

          <div className="flex flex-col gap-10 min-[680px]:flex-row min-[680px]:justify-between min-[950px]:flex-col lg:w-1/2">
            <p className="min-[680px]:w-[45%] min-[950px]:w-full">
              {ABOUT_RIGHT_CONTENT}
            </p>

            <div className="min-[680px]:w-1/2 min-[950px]:w-full flex gap-4 md:gap-8 lg:gap-10">
              <Image
                src="/about.jpg"
                alt="hope-image"
                width={100}
                height={20}
                className="rounded-xl md:w-[30%] xl:w-[28%]"
              />
              <div className="flex flex-col justify-between">
                {ABOUT_SLOGANS.map(({ label }) => (
                  <h3
                    key={label}
                    className="bold-18 md:bold-20 lg:bold-24 xl:text-[26px]"
                  >
                    {label}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
