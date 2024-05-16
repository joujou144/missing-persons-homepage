import React from "react";
import Pill from "./Pill";
import Image from "next/image";

const About = () => {
  return (
    <section className="border-cream border-2 max-container py-4 lg:py-8">
      <div className="mx-4 border-2 border-green-300 flex flex-col gap-6">
        <Pill
          label="Who we are"
          variant="pill-light"
          className="padding-container self-start"
        />
        <h2 className="bold-16 md:bold-20 lg:bold-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          culpa perferendis quae quo optio architecto laboriosam neque
          temporibus nemo in.
        </h2>

        <div className="flex justify-between gap-20 text-[14px] md:text-[15px] max-[950px]:flex-col max-[950px]:gap-10">
          <div className="flex flex-col justify-between gap-6 lg:w-1/2">
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
              exercitationem, ab voluptates facere voluptatibus.
            </p>
          </div>

          <div className="flex flex-col gap-10 min-[680px]:flex-row min-[680px]:justify-between min-[950px]:flex-col lg:w-1/2">
            <p className="min-[680px]:w-[45%] min-[950px]:w-full">
              When designing for the web, whitespace is one of those tools you
              should never take for granted and should always keep a good handle
              on. Something to keep in mind: the things you scale upwards often
              become focal points, so, be sure to scale with care. With great
              scale comes great responsibility.
            </p>

            <div className="min-[680px]:w-1/2 min-[950px]:w-full flex gap-4 md:gap-8 lg:gap-10">
              <Image
                src="/about.jpg"
                alt="hope-image"
                width={120}
                height={20}
                className="rounded-xl"
              />
              <div className="flex flex-col justify-between text-shadow-sm shadow-gray-50">
                <h3 className="bold-15 md:bold-18 lg:bold-24">
                  Faith Over Fear
                </h3>
                <h3 className="bold-15 md:bold-18 lg:bold-24">
                  {"Don't Lose Hope"}
                </h3>
                <h3 className="bold-15 md:bold-18 lg:bold-24">
                  Keep Your Head Up
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* <h4 className="text-center mt-10 bold-28 max-[950px]:bold-24 max-[650px]:bold-18">
        Search. Hope. Find Them Alive.
      </h4> */}
      </div>
    </section>
  );
};

export default About;
