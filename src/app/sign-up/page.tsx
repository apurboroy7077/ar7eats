import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";
import React from "react";
let metadata = {
  title: "Login Page",
  description: "Login Page of AR7Eats",
};
const page = () => {
  return (
    <section className="py-5 bg-[#ECECF0] px-5">
      <div className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
        Sign Up
      </div>
      <div className="text-xs md:text-lg  text-center mt-2 md:mt-4">
        More than <span className="text-[#E00052] font-bold">10000</span> types
        of food awaiting for you!
      </div>
      <div className="mt-7 md:mt-10 flex justify-center">
        <SignUpForm />
      </div>
    </section>
  );
};

export { metadata };
export default page;
