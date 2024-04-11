import {
  GET_FOOD_DATA_API_3,
  GET_FOOD_DATA_BASED_ON_CATEGORY_API,
  GET_TOTAL_NUMBER_OF_FOOD_IN_DATABASE_API,
} from "@/data/Variables";
import {
  categoryNameType,
  foodDataType,
  paginationDataType,
} from "@/data/types";
import axios from "axios";
import { create } from "zustand";

type useProductType = {
  productsData: foodDataType[];
  productsDataShown: foodDataType[];
  totalNumbersOfProductsInDatabase: number;
  setTotalNumberOfProductsInDatabase: () => void;
  firstTimeLoadData: () => void;
  loadDataAccordingPagination: (data: paginationDataType) => void;
  currentCategory: categoryNameType;
  selectCategory: (categoryName: categoryNameType) => void;
};
const useProduct = create<useProductType>((set) => {
  return {
    productsData: [] as foodDataType[],
    productsDataShown: [] as foodDataType[],
    totalNumbersOfProductsInDatabase: 0,
    setTotalNumberOfProductsInDatabase: () => {
      axios
        .post(GET_TOTAL_NUMBER_OF_FOOD_IN_DATABASE_API, {})
        .then((response) => {
          const receivedData = response.data.data;
          set((state) => {
            return {
              ...state,
              totalNumbersOfProductsInDatabase: receivedData,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    firstTimeLoadData: () => {
      axios
        .post(GET_FOOD_DATA_API_3, {})
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    },
    loadDataAccordingPagination: (data: paginationDataType) => {
      axios
        .post(GET_FOOD_DATA_API_3, { data })
        .then((response) => {
          const receivedData = response.data.data;
          set((state) => {
            return { ...state, productsDataShown: receivedData };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    currentCategory: "All Categories" as categoryNameType,
    selectCategory: (categoryName: categoryNameType) => {
      axios
        .post(GET_FOOD_DATA_BASED_ON_CATEGORY_API, { categoryName })
        .then((response) => {
          const receivedData = response.data.data;
          console.log(receivedData);
          set((state) => {
            return {
              ...state,
              productsDataShown: receivedData,
              currentCategory: categoryName,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
});
export default useProduct;
