"use client";
import {
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  LOCALSTORAGE_USERDATA_KEYNAME,
} from "@/data/Variables";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleYes = () => {
    localStorage.removeItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    localStorage.removeItem(LOCALSTORAGE_USERDATA_KEYNAME);
    router.push("/");
  };
  const handleNo = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="text-center my-[1rem] md:text-2xl">
        Are you Sure you want to Log Out?
      </div>
      <div className=" my-[1rem] flex items-center justify-center gap-3">
        <button
          onClick={handleYes}
          className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[red] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]"
        >
          Yes
        </button>
        <button
          onClick={handleNo}
          className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F9E1E1] text-[#F54748] px-3 py-2 rounded lg:text-xl active:scale-[0.95]"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Page;
