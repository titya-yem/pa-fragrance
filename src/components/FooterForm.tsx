"use client";

import { FooterInfo } from "@/types";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FooterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FooterInfo>();

  const onSubmit = async (data: FooterInfo) => {
    setIsLoading(true);
    try {
      await axios.post("/api/question", data);
      toast.success("Thank you! Your message has been sent.");
      reset();
      focusEmailInput();
    } catch (error: any) {
      console.error("Error submitting question:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const focusEmailInput = () => {
    emailInputRef.current?.focus();
  };

  return (
    <div className="mx-auto w-4/5 md:w-3/5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Contact
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-sm lg:text-base sm:w-3/5 lg:w-[70%] sm:mx-auto"
        ref={formRef}
      >
        <input
          className="p-6 rounded-md text-black bg-white"
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          ref={(e) => {
            register("email").ref(e);
            emailInputRef.current = e;
          }}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <textarea
          className="p-3 rounded-md text-black bg-white h-36"
          placeholder="Message Us"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}

        <button
          className="cta-two rounded-md duration-200"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
