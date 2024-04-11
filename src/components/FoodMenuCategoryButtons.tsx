"use client";
import categoryData from "@/data/CategoryData";
import { categoryNameType } from "@/data/types";
import useProduct from "@/utils/ZustandProduct";
import React from "react";

const FoodMenuCategoryButtons = () => {
  const currentCategory = useProduct((state) => state.currentCategory);
  const selectCategory = useProduct((state) => state.selectCategory);
  return (
    <div className="md:mt-7 lg:mt-16 lg:pb-10 grid grid-cols-3 lg:grid-cols-5 l gap-2 md:gap-7 text-nowrap mt-3">
      {categoryData.map((data) => {
        let categoryName = data.name;
        if (currentCategory === categoryName) {
          return (
            <button
              className="text-sm lg:text-lg px-2 py-2 md:py-3 lg:py-2 rounded lg:rounded-lg md:font-medium bg-[#F54748] text-white"
              key={Math.random()}
              onClick={() => {
                selectCategory(categoryName as categoryNameType);
              }}
            >
              {categoryName}
            </button>
          );
        } else {
          return (
            <button
              className="text-sm lg:text-lg px-2 py-2 md:py-3 lg:py-2 rounded lg:rounded-lg md:font-medium  bg-[#F6F4F5] active:bg-[#F54748] active:text-white "
              key={Math.random()}
              onClick={() => {
                selectCategory(categoryName as categoryNameType);
              }}
            >
              {categoryName}
            </button>
          );
        }
      })}
    </div>
  );
};

export default FoodMenuCategoryButtons;
