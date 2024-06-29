import { CONTACT, FOOTER_LINKS } from "@/constant";
import Image from "next/image";
import Heading from "../components/Heading";

import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="xl-container bg-primary-300 ">
      <div className="max-container">
        <div className="mx-4 py-20 lg:py-14 flex flex-col min-[800px]:flex-row min-[800px]:justify-between gap-6">
          <ContactInformation className="min-[800px]:w-[62%] flex flex-col justify-between gap-4 min-[800px]:pr-4" />

          <ContactForm className="min-[800px]:w-[450px] flex flex-col justify-between gap-4 p-6 shadow-lg shadow-gray-70" />
        </div>
      </div>
    </section>
  );
};

export const ContactInformation = ({ className }: { className: string }) => {
  return (
    <div className={`text-primary-700 ${className} `}>
      <Heading variant="header-light" label="connect with us" />
      <div className="content-size flex flex-col gap-4 min-[450px]:flex-row md:gap-8">
        <Image
          src="/phone-img.png"
          alt="contact"
          width={180}
          height={180}
          className="rounded-xl w-auto h-auto"
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

export default Contact;
