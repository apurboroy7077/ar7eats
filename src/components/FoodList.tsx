import foodData from "@/data/foodData";

import React from "react";
import FoodListItem from "./FoodListItem";

const FoodList = () => {
  return (
    <ul className="mt-5 md:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16 ">
      {foodData.map((data) => {
        return <FoodListItem data={data} key={Math.random().toString()} />;
      })}
    </ul>
  );
};

export default FoodList;
