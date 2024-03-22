import chefsData from "@/data/ChefData";
import React from "react";

const ChefSection = () => {
  return (
    <section className=" overflow-hidden px-3  lg:px-[7vw] py-5 md:py-10 lg:py-20   md:px-[3rem]  ">
      <div className="pt-5 lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="text-center lg:py-10  font-bold text-lg md:text-2xl  lg:text-5xl">
          Our Popular Chef
        </div>
        <div className="mt-3 md:mt-10 flex items-center justify-center w-full">
          <ul className="grid   gap-5 md:gap-7 grid-cols-2 lg:grid-cols-3 ">
            {chefsData.map((data) => {
              return (
                <li key={Math.random()}>
                  <div className="  overflow-hidden lg:w-[18rem] rounded-lg">
                    <img
                      src={data.imageSrc}
                      alt={data.name}
                      className="hover:scale-[1.1] w-full"
                      style={{ transition: "all 0.5s ease" }}
                    />
                  </div>
                  <div className="text-center mt-2 font-bold text-sm md:text-base">
                    {data.name}
                  </div>
                  <div className="text-center mt-1 font-medium text-sm md:text-base opacity-[0.5]">
                    {data.address}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center mt-6 md:mt-10 lg:mt-20">
          <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
