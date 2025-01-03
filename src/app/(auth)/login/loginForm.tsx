"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", user);
      // handle response
    } catch (error) {
      // handle error
    }
  };

  return (
    <>
      <form className="flex flex-col justify-between items-center gap-4 *:flex *:items-center *:gap-4">
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
          onClick={onLogin}
          className="cta-two rounded-sm duration-200 w-11/12 mt-6 text-center flex items-center justify-center py-2"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
