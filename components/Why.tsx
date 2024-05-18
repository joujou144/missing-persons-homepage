import {
  CTA_INTRO,
  CTA_TEXT,
  MAP_DATE,
  MAP_TEXT,
  persons,
  REASONS,
  WHY_SLOGANS,
} from "@/constant";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import MissingPersons from "./MissingPersons";

const Why = () => {
  return (
    <section className="xl-container relative py-8 lg:py-12">
      <div className="max-container">
        <div className="mx-4 lg:flex lg:justify-between lg:gap-10">
          <div className="lg:w-1/2 flex flex-col gap-6 lg:justify-between">
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

          <div className="lg:w-1/2 order-first md:my-6 lg:my-0">
            <MissingPersons missing={persons} />
          </div>
        </div>
        <p className="text-center capitalize bold-content mt-6 mb-10">
          {MAP_TEXT}
        </p>
      </div>
      <div className="bg-gray-20 content-font text-[14px] py-2 text-midnight">
        <div className="max-container">
          <p className="mx-4">{MAP_DATE}</p>
        </div>
      </div>
      <Image
        src="/map.png"
        alt="map"
        width={800}
        height={50}
        className="w-full image-grayscale"
      />
    </section>
  );
};

export const CallToAction = () => {
  return (
    <div className="content-size pb-6 lg:pb-4 flex flex-col gap-6">
      <p className="p-6 bg-gray-70 rounded-xl">{CTA_INTRO}</p>
      <p className="md:w-3/4 lg:w-full xl:w-3/4 text-center lg:text-left lg:self-start sm:self-center">
        {CTA_TEXT}
      </p>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between md:flex-col md:items-center md:gap-6">
        <Image
          src="/Logo-light.svg"
          alt="LostInNL-logo"
          width={120}
          height={20}
          className=""
        />
        <Button
          type="button"
          variant="btn-light"
          label="Add Missing Person"
          icon={true}
          className="lg:order-first"
        />
      </div>
    </div>
  );
};

export default Why;
