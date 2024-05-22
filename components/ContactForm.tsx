"use client";

import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/app/utils/schemaValidation";
import { z } from "zod";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { toast } from "sonner";

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = ({ className }: { className: string }) => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // const result = await somefunction(data)
    try {
      setSubmitting(true);
      //post data
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
    }
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
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>

      <div>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 outline-none w-full"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>

      <div>
        <textarea
          placeholder="Message"
          rows={6}
          {...register("message")}
          className="p-2 bg-gray-70 border-b-[1px] border-gray-30 w-full resize-none outline-none"
        />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </div>

      <Button
        type="submit"
        label="Submit"
        variant="btn-light"
        className="min-[600px]:self-end"
        disabled={submitting}
      />
    </form>
  );
};
