"use client";
import { paginationDataType } from "@/data/types";
import useProduct from "@/utils/ZustandProduct";
import generateRanges from "@/utils/generateRanges";

const FoodMenuPagination = () => {
  const numbersOfTotalFoodInDatabase = useProduct(
    (state) => state.totalNumbersOfProductsInDatabase
  );
  const loadDataAccordingPagination = useProduct(
    (state) => state.loadDataAccordingPagination
  );
  const paginationRanges = generateRanges(numbersOfTotalFoodInDatabase);
  const handleOnClickPaginationButton = (data: paginationDataType) => {
    loadDataAccordingPagination(data);
  };

  return (
    <div className="flex   justify-center mt-5 md:mt-10 lg:mt-24">
      <ul className="flex gap-1 md:gap-3 overflow-y-auto max-w-[35rem]">
        {paginationRanges.map((data, index) => {
          return (
            <button
              onClick={() => {
                handleOnClickPaginationButton(data);
              }}
              key={Math.random()}
              className="bg-[#EDEDED] hover:bg-[#311F09] text-black hover:text-white  font-medium  text-[0.7rem] md:text-xl px-[0.5rem] py-[0.1rem] rounded"
            >
              {index}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FoodMenuPagination;
