import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import { CONTACT, FOOTER_LINKS } from "@/constant";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="xl-container bg-cream">
      <div className="max-container">
        <div className="mx-6 min-[800px]:flex justify-between md:gap-4 gap-0">
          <ContactInformation className="min-[800px]:w-[60%] py-6" />

          <ContactForm className="min-[800px]:w-[420px] px-6 py-8 my-6" />
        </div>
      </div>
    </section>
  );
};

export const ContactInformation = ({ className }: { className: string }) => {
  return (
    <div className={`text-midnight ${className} `}>
      <Heading variant="header-dark" label="connect with us" />
      <div className="content-size mt-6 flex flex-col gap-4 min-[450px]:flex-row md:gap-6">
        <Image
          src="/phone-img.png"
          alt="contact"
          width={180}
          height={50}
          objectFit="contain"
          className="rounded-xl"
        />

        <ul className="content-size flex flex-col gap-4">
          {CONTACT.map(({ content }) => (
            <li key={content} className="max-w-sm md:max-w-md lg:max-w-lg">
              {content}
            </li>
          ))}
        </ul>
      </div>

      <ul className="content-size flex flex-col gap-4 mt-6 md:flex-row justify-between">
        {FOOTER_LINKS.map(({ title, links }) => (
          <li key={title}>
            <h4 className="font-bold mb-2">{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link} className="mt-1 cursor-pointer links">
                  {link}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ContactForm = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-gray-70 text-cream content-size rounded-xl ${className}`}
    >
      <form className="content-size flex flex-col justify-between gap-4">
        <input
          id="guest_name"
          type="text"
          placeholder="Name"
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 outline-none"
        />

        <input
          id="guest_email"
          type="email"
          placeholder="Email"
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 outline-none"
        />

        <textarea
          // value={value}
          placeholder="Message"
          // onChange={handleChange}
          className="p-2 bg-gray-70 min-h-[150px] border-b-[1px] border-gray-30 resize-none w-full outline-none"
        />

        <Button
          type="submit"
          label="Submit"
          variant="btn-light"
          // className="min-[700px]:self-end"
        />
      </form>
    </div>
  );
};

export default Contact;
