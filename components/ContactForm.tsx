"use client";

import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { contactFormSchema } from "@/app/utils/schemaValidation";
import { z } from "zod";
import { useState } from "react";

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = ({ className }: { className: string }) => {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
  });
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} bg-gray-70 text-cream rounded-xl content-size`}
    >
      <div>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register("name")}
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 outline-none w-full"
        />
        <p className="text-[12px] font-thin text-red-300 italic">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 outline-none w-full"
        />
        <p className="text-[12px] font-thin text-red-300 italic">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <textarea
          // value={value}
          placeholder="Message"
          // onChange={handleChange}
          rows={6}
          {...register("message")}
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 w-full resize-none outline-none"
        />
        <p className="ml-2 text-[12px] font-thin text-red-300 italic">
          {errors.message?.message}
        </p>
      </div>

      <Button
        type="submit"
        label="Submit"
        variant="btn-light"
        className="min-[600px]:self-end"
      />
    </form>
  );
};
