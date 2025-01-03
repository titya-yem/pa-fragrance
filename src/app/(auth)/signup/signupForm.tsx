"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("/api/signup", user);
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <form
        onSubmit={onSignup}
        className="flex flex-col justify-between items-center gap-4 *:flex *:items-center *:gap-4"
      >
        <div>
          <label htmlFor="username" className="text-lg mr-7">
            Name
          </label>
          <input
            type="text"
            value={user.name}
            id="username"
            placeholder="Name"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg mr-8">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            id="email"
            placeholder="Email"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            id="password"
            placeholder="Password"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={buttonDisabled}
          className="cta-two rounded-sm duration-200 w-[82%] mt-6 text-center flex items-center justify-center py-2"
        >
          {buttonDisabled ? "Please fill the form to Sign Up" : "Sign Up"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
