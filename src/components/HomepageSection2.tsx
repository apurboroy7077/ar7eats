import React from "react";

const HomepageSection2 = () => {
  return (
    <section className=" overflow-hidden bg-[#E7F9ED] py-5 lg:py-10   md:px-[3rem] lg:px-[7vw] ">
      <div className=" md:flex md:flex-row-reverse items-center justify-between lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div>
          <div className="text-center lg:text-left text-xl font-bold md:text-2xl lg:text-5xl">
            Our Most Popular <span className="text-[#F54748] ">Dish.</span>
          </div>
          <div className="text-sm lg:text-xl text-center lg:text-left mt-3 opacity-[0.75] ">
            People Who Eats it Buys It Again and Again
          </div>
          <div className="mt-5 text-center flex justify-center gap-3 lg:justify-start">
            <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
              Order Now
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center ">
            <img
              src="/images/food/biriyani.png"
              className="w-[13rem] lg:w-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection2;
