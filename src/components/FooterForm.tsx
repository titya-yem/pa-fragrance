"use client";

import { FooterInfo } from "@/types";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const FooterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FooterInfo>();

  const onSubmit = (data: FooterInfo) => {
    try {
      setIsLoading(true);
      formRef.current?.reset();
      focusEmailInput();
      focusMessageInput();
      console.log(data);
      // TODO: Send data to backend using axios library
    } catch (error) {
      console.log(errors);
      setIsLoading(false);
    }
  };

  const focusEmailInput = () => {
    emailInputRef.current?.focus();
  };
  const focusMessageInput = () => {
    messageInputRef.current?.focus();
  };

  return (
    <div className="mx-auto w-4/5 md:w-3/5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Contact
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-sm lg:text-base sm:w-3/5 lg:w-[70%] sm:mx-auto"
        ref={formRef}
      >
        <input
          className="p-6 rounded-md text-black bg-white"
          type="email"
          placeholder="Email"
          required
          {...register("email")}
          ref={(e) => {
            register("email").ref(e);
            emailInputRef.current = e;
          }}
        />
        <textarea
          className="p-3 rounded-md text-black bg-white h-36"
          placeholder="Message Us"
          required
          {...register("message")}
          ref={(e) => {
            register("message").ref(e);
            messageInputRef.current = e;
          }}
        ></textarea>
        <button
          className="cta-two rounded-md duration-200"
          disabled={isLoading}
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
