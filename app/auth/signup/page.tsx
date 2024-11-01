"use client";

import Link from "next/link";
import Image from "next/image";

import { Input } from "@ui/Input";

import { register } from "@api/post/register";

import bgImage from "@public/images/background-signup.png";

const SignUpPage = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    register({
      username: data.get("username") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <div className="fixed h-screen w-screen overflow-hidden flex items-center justify-center">
      <Image
        alt="background image"
        src={bgImage}
        className="bg-[#2F1893] absolute h-full w-full object-cover inset-0 -z-10"
        draggable={false}
      />
      <form
        onSubmit={onSubmitHandler}
        className="h-fit w-[430px] rounded-xl bg-white flex flex-col items-center pt-[70px]"
      >
        <h3 className="font-bold text-[42px] text-[#1E0E62] mb-10">
          Sign Up Now
        </h3>
        <div className="flex items-center flex-col gap-5 mb-10 w-[330px]">
          <Input placeholder="Your email" type="email" name="username" />
          <Input placeholder="Your password" type="password" name="password" />
        </div>
        <button className="text-white bg-[#25DAC5] text-lg font-medium rounded-full px-[86px] py-3 mb-[50px]">
          Create an Account
        </button>
        <div className="text-[#151439] font-medium relative text-opacity-40 py-[25px] before:content-[''] before:h-[1px] before:w-[350px] before:bg-[#EBEAED] before:absolute before:block before:-translate-x-2/4 before:left-2/4 before:top-0">
          Do you have an Account?{" "}
          <span className="text-[#25DAC5]">
            <Link href={"/auth/signin"}>Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
