import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
    {...props}
      className="px-6 py-4 placeholder:text-[#151439/40] border font-medium rounded-full w-full bg-black h-[60px]"
    />
  );
};
