"use client";
import Link from "next/link";

const SignUpForm = () => {
  let handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    console.log(name, email, password);
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="bg-[white] w-full md:max-w-[39rem] px-5 md:px-10 py-10 md:py-16 rounded-lg"
    >
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
        <button
          type="submit"
          className="border-[black] border-[1px] w-full rounded px-2 py-1 md:py-3  bg-[#F54748] text-[white] font-bold active:scale-[0.95]"
        >
          CREATE ACCOUNT
        </button>
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
