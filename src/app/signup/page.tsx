import Image from "next/image";
import PaWord from "../../../public/Pa Word.png";
import SignupForm from "@/components/signupForm";

const login = () => {
  return (
    <main className="border border-[#fed42d] w-[400px] py-4 rounded-md mx-auto mb-28">
      <Image
        className="mx-auto lg:w-24 mb-6"
        src={PaWord}
        width={80}
        alt="Pa word official in Khmer alphabet"
      />
      <SignupForm />
    </main>
  );
};

export default login;
