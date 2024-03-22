import Link from "next/link";

const SignInForm = () => {
  return (
    <form className="bg-[white] w-full md:max-w-[39rem] px-5 md:px-10 py-10 md:py-16 rounded-lg">
      <div>
        <input
          type="email"
          className="md:text-xl border-[black] border-[1px] w-full rounded px-2 md:px-4 py-1 md:py-3 bg-[#FAFAFC]"
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="mt-7 md:mt-10">
        <input
          type="password"
          className=" md:text-xl border-[black]  border-[1px] w-full rounded px-2 md:px-4 py-1 md:py-3  bg-[#FAFAFC]"
          placeholder="Enter Password"
          required
        />
      </div>

      <div className="mt-7 md:mt-10">
        <button
          type="submit"
          className="border-[black] border-[1px] w-full rounded px-2 py-1 md:py-3  bg-[#F54748] text-[white] font-bold active:scale-[0.95]"
        >
          LOGIN
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
        Do not have an Account?{" "}
        <Link href="/sign-up" className="font-bold text-green-700">
          Create One.
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
