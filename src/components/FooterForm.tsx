"client server";

const FooterForm = () => {
  return (
    <div className="mx-auto w-4/5 md:w-3/5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Contact
      </h1>
      <form className="flex flex-col gap-6 text-sm lg:text-base sm:w-3/5 lg:w-[70%] sm:mx-auto">
        <input
          className="p-6 rounded-md text-black bg-white"
          type="email"
          name="Email"
          placeholder="Email"
        />
        <textarea
          className="p-6 rounded-md text-black bg-white h-36"
          name="Message"
          placeholder="Message Us"
        ></textarea>
        <button className="cta-two rounded-md duration-200" type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
