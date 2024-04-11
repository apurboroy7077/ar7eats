import categoryData from "@/data/CategoryData";
import foodData from "@/data/foodData";
import GenerateStars from "@/utils/GenerateStars";
import React from "react";
import FoodList from "./FoodList";
import useProduct from "@/utils/ZustandProduct";
import generateRanges from "@/utils/generateRanges";
import FoodMenuPagination from "./FoodMenuPagination";
import FoodMenuCategoryButtons from "./FoodMenuCategoryButtons";

const PopularMenuSection = () => {
  return (
    <section className=" overflow-hidden px-3 lg:px-[7vw] py-5 lg:py-10   md:px-[3rem]  ">
      <div className="pt-5 lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="text-center lg:py-10 font-bold text-xl md:text-2xl lg:text-5xl">
          Our Popular Menu
        </div>
        <FoodMenuCategoryButtons />
        <FoodList />
        <FoodMenuPagination />
      </div>
    </section>
  );
};

export default PopularMenuSection;
