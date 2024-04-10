"use client";

import React, { useEffect } from "react";
import FoodListItem from "./FoodListItem";
import useProduct from "@/utils/ZustandProduct";

const FoodList = () => {
  const foodData = useProduct((state) => state.productsData);
  const foodDataShown = useProduct((state) => state.productsDataShown);
  return (
    <ul className="mt-5 md:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16 ">
      {foodDataShown.map((data) => {
        return <FoodListItem data={data} key={Math.random().toString()} />;
      })}
    </ul>
  );
};

export default FoodList;
