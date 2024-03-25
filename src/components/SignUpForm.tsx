"use client";
import { SIGN_IN_PAGE_ADDRESS, SIGN_UP_API } from "@/data/Variables";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpForm = () => {
  let router = useRouter();
  let [fetchingMessage, setFetchingMessage] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    let dataForServer = { name, email, password };
    setIsLoading(true);
    axios
      .post(SIGN_UP_API, dataForServer)
      .then((response: any) => {
        setIsLoading(false);
        console.log(response);
        let serverMessage = response.data.message;
        toast(serverMessage);
        setTimeout(() => {
          router.push(SIGN_IN_PAGE_ADDRESS);
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        let serverMessage = error.response.data.message;
        setFetchingMessage(serverMessage);
      });
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="bg-[white] w-full md:max-w-[39rem] px-5 md:px-10 py-10 md:py-16 rounded-lg"
    >
      {fetchingMessage && (
        <div className="mb-9 md:mb-10 text-center text-sm md:text-base">
          {fetchingMessage}
        </div>
      )}
      <div>
        <input
          type="text"
          className="md:text-xl border-[black] border-[1px] w-full rounded px-2 md:px-4 py-1 md:py-3 bg-[#FAFAFC]"
          placeholder="Name"
          name="name"
          required
        />
      </div>
      <div className="mt-7 md:mt-10">
        <input
          type="email"
          className="md:text-xl border-[black] border-[1px] w-full rounded px-2 md:px-4 py-1 md:py-3 bg-[#FAFAFC]"
          placeholder="Enter Email"
          name="email"
          required
        />
      </div>
      <div className="mt-7 md:mt-10">
        <input
          type="password"
          className=" md:text-xl border-[black]  border-[1px] w-full rounded px-2 md:px-4 py-1 md:py-3  bg-[#FAFAFC]"
          placeholder="Enter Password"
          name="password"
          required
        />
      </div>

      <div className="mt-7 md:mt-10">
        {!isLoading && (
          <button
            type="submit"
            className="border-[black] border-[1px] w-full rounded px-2 py-1 md:py-3  bg-[#F54748] text-[white] font-bold active:scale-[0.95]"
          >
            CREATE ACCOUNT
          </button>
        )}
        {isLoading && (
          <button className="border-[black] border-[1px] w-full rounded px-2 py-1 md:py-3  bg-[#F54748] text-[white] font-bold active:scale-[0.95]">
            CREATING ACCOUNT{" "}
            <img
              src="/images/icons/loading.svg"
              className=" inline w-[1.5rem] animate-spin"
              alt=""
            />
          </button>
        )}
      </div>
      <div className="mt-9 md:mt-10 text-center text-sm md:text-base">
        Continue with{" "}
        <img
          src="/images/icons/google.svg"
          alt=""
          className=" inline w-[3rem] md:w-[4rem]"
        />
      </div>
      <div className="mt-9 md:mt-10 text-center text-sm md:text-base">
        Already have an Account?{" "}
        <Link href="/sign-in" className="font-bold text-green-700">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
