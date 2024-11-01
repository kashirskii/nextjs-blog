"use client";

import Link from "next/link";
import Image from "next/image";

import { Input } from "@ui/Input";

import { login } from "@api/post/login";

import bgImage from "@public/images/background-signin.png";

const SignInPage = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      username: data.get("username") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <>
      <div className="fixed h-screen w-screen overflow-hidden flex items-center justify-center">
        <Image
          alt="background image"
          src={bgImage}
          className="bg-[#2F1893] absolute h-full w-full object-cover inset-0 -z-10"
          draggable={false}
        />
        <form
          onSubmit={onSubmitHandler}
          className="h-[570px] w-[570px] rounded-xl bg-white flex flex-col items-center pt-[70px]"
        >
          <h3 className="font-bold text-[42px] text-[#1E0E62] mb-10">
            Sign In
          </h3>
          <div className="flex items-center flex-col gap-5 mb-2 w-[370px]">
            <Input
              placeholder="Your email"
              required
              name="username"
              type="email"
            />
            <Input
              placeholder="Your password"
              required
              name="password"
              type="password"
            />
          </div>
          <div className="text-[#151439] text-opacity-40 mb-[30px] cursor-pointer">
            Forgot Password?
          </div>
          <button className="text-white bg-[#482BE7] text-xl font-medium rounded-full px-[84px] py-4 mb-[60px]">
            Sign In
          </button>
          <div className="text-[#151439] font-medium relative text-opacity-40 py-[25px] before:content-[''] before:h-[1px] before:w-[350px] before:bg-[#EBEAED] before:absolute before:block before:-translate-x-2/4 before:left-2/4 before:top-0">
            Don’t have an account?{" "}
            <span className="text-[#482BE7]">
              <Link href={"/auth/signup"}>Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
