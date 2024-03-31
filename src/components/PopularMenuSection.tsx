import categoryData from "@/data/CategoryData";
import foodData from "@/data/foodData";
import GenerateStars from "@/utils/GenerateStars";
import React from "react";
import FoodList from "./FoodList";

const PopularMenuSection = () => {
  return (
    <section className=" overflow-hidden px-3 lg:px-[7vw] py-5 lg:py-10   md:px-[3rem]  ">
      <div className="pt-5 lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="text-center lg:py-10 font-bold text-xl md:text-2xl lg:text-5xl">
          Our Popular Menu
        </div>
        <div className="md:mt-7 lg:mt-16 lg:pb-10 grid grid-cols-3 lg:grid-cols-5 l gap-2 md:gap-7 text-nowrap mt-3">
          {categoryData.map((data) => {
            let categoryName = data.name;
            return (
              <button
                className="text-sm lg:text-lg px-2 py-2 md:py-3 lg:py-2 rounded lg:rounded-lg md:font-medium  bg-[#F6F4F5] active:bg-[#F54748] active:text-white "
                key={Math.random()}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
        <FoodList />
        <div className="flex justify-center mt-5 md:mt-10 lg:mt-24">
          <ul className="flex gap-1 md:gap-3">
            {Array.from({ length: 6 }).map((data, index) => {
              return (
                <button
                  key={Math.random()}
                  className="bg-[#EDEDED] hover:bg-[#311F09] text-black hover:text-white  font-medium  text-[0.7rem] md:text-xl px-[0.5rem] py-[0.1rem] rounded"
                >
                  {index}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularMenuSection;
