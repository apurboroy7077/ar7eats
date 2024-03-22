import Link from "next/link";

const TheFooter = () => {
  return (
    <footer className=" overflow-hidden px-3 md:px-[3rem] lg:px-[7vw] py-5 md:py-10 lg:py-12 bg-[#1D191A]">
      <div className="   lg:max-w-[80rem] lg:m-auto  rounded-lg">
        <div className=" flex justify-center items-center gap-3 md:gap-5 lg:gap-7">
          <Link href="https://www.facebook.com/apurboroy7077/" target="_blank">
            <img
              src="/images/icons/facebook.svg"
              className="w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]  hover:scale-[1.1]"
              alt="image of facebook link"
              style={{ transition: "all 0.5s ease" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/apurboroy7077/"
            target="_blank"
          >
            <img
              src="/images/icons/linkedin.svg"
              className="w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] hover:scale-[1.1]"
              alt="image of linkedin link"
              style={{ transition: "all 0.5s ease" }}
            />
          </Link>
          <Link href="tel:+8801964450847" target="_blank">
            <img
              src="/images/icons/whatsapp.svg"
              className="w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] hover:scale-[1.1]"
              alt="image of whatsapp link"
              style={{ transition: "all 0.5s ease" }}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3 mt-5 md:mt-7 lg:mt-10">
          <div className=" text-white  text-sm md:text-lg lg:text-xl font-medium">
            All Rights Reserved
          </div>
          <div className="flex  items-center  rounded-full ">
            <div>
              <img
                src="/images/icons/logo.png"
                alt=""
                className="w-[2rem] md:w-[3rem]"
              />
            </div>
            <div className="text-[#F54748] text-xs md:text-sm lg:text-base font-medium">
              AR7Eats
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
