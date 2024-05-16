import React from "react";
import Pill from "./Pill";
import MissingPersons from "./MissingPersons";
import { persons, REASONS, WHY_SLOGANS } from "@/constant";
import Image from "next/image";
import Button from "./Button";
import { PiPlusBold } from "react-icons/pi";

const Why = () => {
  return (
    <section className="xl-container border-red-500 border-2 py-4 lg:py-8">
      <div className="max-container bg-cream border-2 border-blue-500 py-4">
        <div className="mx-4 flex flex-col text-midnight">
          <Pill
            label="The Reason"
            variant="pill-dark"
            className="padding-container self-start"
          />

          <ul>
            {REASONS.map(({ reason }) => (
              <p key={reason} className="my-6">
                {reason}
              </p>
            ))}
          </ul>

          <ul className="self-end text-right">
            {WHY_SLOGANS.map(({ label }) => (
              <h3 key={label} className="my-2 bold-20 te">
                {label}
              </h3>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-container flex-1 border-2 border-purple-300">
        <div className="mx-4">
          <MissingPersons
            missing={persons}
            className="flex flex-col gap-4 border-2 border-yellow-200"
          />
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export const CallToAction = () => {
  return (
    <div className="">
      <p className="text-[14px] w-full md:w-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem!
      </p>
      <div className="flex flex-col gap-4">
        <Image
          src="/Logo-light.svg"
          alt="LostInNL-logo"
          width={80}
          height={20}
          className="mt-4"
        />
        <Button
          type="button"
          variant="btn-light"
          label="Add Missing Person"
          icon={<PiPlusBold />}
          className="self-start"
        />
      </div>
    </div>
  );
};

export default Why;
