"use client";
import { foodDataType } from "@/data/types";
import GenerateStars from "@/utils/GenerateStars";
type propsType = {
  data: foodDataType;
};
const FoodListItem = (props: propsType) => {
  const { data } = props;
  const { name, imageSrc, description, rating, id } = data;
  return (
    <li key={Math.random()} className="text-center">
      <div>
        <img src={imageSrc} alt={name} />
      </div>
      <div className="text-sm md:text-lg font-medium ">{name}</div>
      <div className=" mt-1 text-[0.6rem]  md:text-sm  opacity-[0.6]">
        {description}
      </div>
      <div className="flex justify-center mt-1 md:mt-3">
        <GenerateStars rating={rating} classes={"w-[1rem] md:w-[1.3rem]"} />
      </div>
      <div className="flex gap-2 md:gap-4 items-center justify-center mt-2 md:mt-4">
        <div className="font-medium text-sm md:text-lg">$12.05</div>
        <div>
          <button className="text-xs md:text-sm font-medium rounded bg-[#F54748] text-white px-2 py-1 active:scale-[0.95]">
            Order Now
          </button>
        </div>
      </div>
    </li>
  );
};

export default FoodListItem;
