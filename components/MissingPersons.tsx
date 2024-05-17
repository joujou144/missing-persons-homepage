import React from "react";
import Image from "next/image";
import { PersonProps } from "@/constant";
import { GrLocationPin } from "react-icons/gr";
import { RxDotsHorizontal } from "react-icons/rx";

type MissingPersonProps = {
  missing: PersonProps[];
};

const MissingPersons = ({ missing }: MissingPersonProps) => {
  return (
    <ul className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-between">
      {missing.map(({ name, imageSrc, location, createdAt }) => (
        <li key={name} className="relative">
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={50}
            objectFit="contain"
            // className="flex-1 md:w-[225px] lg:w-[220px] xl:w-[275px]"
            className="flex-1 md:w-[250px] lg:w-[240px] xl:w-[290px]"
          />
          <DatePill createdAt={createdAt} />
          <div className="flexBetween py-2 border-[1px] border-b-gray-10">
            <p>{name}</p>
            <RxDotsHorizontal size={20} />
          </div>

          <div className="text-[14px] py-2 flex gap-1 items-center">
            <GrLocationPin />
            <p>{location}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const DatePill = ({ createdAt }: { createdAt: string }) => {
  return (
    <span className="absolute top-2 left-2 bg-gray-50 bg-opacity-80 text-white px-2 py-1.5 rounded-lg text-[11px]">
      {createdAt}
    </span>
  );
};

export default MissingPersons;
