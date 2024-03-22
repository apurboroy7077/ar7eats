import React from "react";

const HomepageSection1 = () => {
  return (
    <section className=" overflow-hidden lg:pt-10 bg-gradient-to-b from-[#F9DEDD] to-[white] md:px-[3rem] lg:px-[7vw] ">
      <div className="pt-5 md:flex items-center justify-between lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div>
          <div className="text-center lg:text-left text-xl font-bold md:text-2xl lg:text-5xl">
            Best Restaurent In <span className="text-[#F54748] ">Town.</span>
          </div>
          <div className="text-sm lg:text-xl text-center lg:text-left mt-3 opacity-[0.75] ">
            We provide best food in town, we also provide Home Delivery
            Services.
          </div>
          <div className="mt-5 text-center flex justify-center gap-3 lg:justify-start">
            <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
              Order Now
            </button>
            <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F9E1E1] text-[#F54748] px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
              Reservation
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center ">
            <img
              src="/images/food/chicken.png"
              className="w-[13rem] lg:w-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection1;
