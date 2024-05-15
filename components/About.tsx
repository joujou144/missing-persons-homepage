import React from "react";
import Pill from "./Pill";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-container py-14">
      <div className="flex flex-col gap-6 items-start">
        <Pill
          label="Who we are"
          variant="pill-light"
          className="padding-container"
        />
        <h2 className="bold-18 md:bold-20 lg:bold-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          culpa perferendis quae quo optio architecto laboriosam neque
          temporibus nemo in.
        </h2>

        <div className="flex items-start justify-between gap-32 max-md:inline-block">
          <div className="flex flex-col gap-6 max-md:text-[15px]">
            <p>
              When designing for the web, whitespace is one of those tools you
              should never take for granted and should always keep a good handle
              on. Something to keep in mind: the things you scale upwards often
              become focal points, so, be sure to scale with care. With great
              scale comes great responsibility.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              amet ea ad, optio unde natus illum deserunt. Atque, voluptates
              quis?
            </p>
            <p className="bg-cream padding-container py-4 text-midnight rounded-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, eligendi. Asperiores odit enim aperiam aliquam incidunt
              exercitationem, ab voluptates facere voluptatibus magnam nisi
              perspiciatis. Est autem provident quos itaque et.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-md:mt-6 max-md:text-[15px]">
            <p>
              When designing for the web, whitespace is one of those tools you
              should never take for granted and should always keep a good handle
              on. Something to keep in mind: the things you scale upwards often
              become focal points, so, be sure to scale with care. With great
              scale comes great responsibility.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui minima soluta unde necessitatibus. Ex illum sequi quasi
              maiores alias.
            </p>

            <div className="flex item-center gap-10">
              <Image
                src="/about.jpg"
                alt="hope-image"
                width={125}
                height={20}
                className="rounded-xl"
              />
              <div className="font-bold flex flex-col justify-between">
                <h3 className="text-[28px] max-md:bold-20 text-shadow-sm shadow-gray-30">
                  Faith Over Fear
                </h3>
                <h3 className="text-[28px] max-md:bold-20 text-shadow-sm shadow-gray-30">
                  {"Don't Lose Hope"}
                </h3>
                <h3 className="text-[28px] max-md:bold-20 text-shadow-sm shadow-gray-30">
                  Keep Your Head Up
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="bold-28 text-center mt-10 max-md:bold-20">
        Search. Hope. Find Them Alive.
      </h4>
    </section>
  );
};

export default About;
