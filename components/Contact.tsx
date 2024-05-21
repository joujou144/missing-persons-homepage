import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import { CONTACT, FOOTER_LINKS } from "@/constant";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="xl-container bg-cream">
      <div className="max-container">
        <div className="mx-6 py-8 flex flex-col min-[800px]:flex-row min-[800px]:justify-between gap-6">
          <ContactInformation className="min-[800px]:w-[62%] flex flex-col justify-between gap-4 min-[800px]:pr-4" />

          <ContactForm className="min-[800px]:w-[450px] flex flex-col justify-between gap-4 p-6 shadow-lg shadow-gray-70" />
        </div>
      </div>
    </section>
  );
};

export const ContactInformation = ({ className }: { className: string }) => {
  return (
    <div className={`text-midnight ${className} `}>
      <Heading variant="header-dark" label="connect with us" />
      <div className="content-size flex flex-col gap-4 min-[450px]:flex-row md:gap-8">
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

      <ul className="content-size flex flex-col gap-4 md:flex-row justify-between">
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
    <form
      className={`${className} bg-gray-70 text-cream rounded-xl content-size`}
    >
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
        className="p-2 bg-gray-70 h-[150px] border-b-[1px] border-gray-30 resize-none w-full outline-none"
      />

      <Button
        type="submit"
        label="Submit"
        variant="btn-light"
        className="min-[600px]:self-end"
      />
    </form>
  );
};

export default Contact;
