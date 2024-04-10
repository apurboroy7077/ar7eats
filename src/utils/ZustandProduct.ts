import {
  GET_FOOD_DATA_API_3,
  GET_TOTAL_NUMBER_OF_FOOD_IN_DATABASE_API,
} from "@/data/Variables";
import { foodDataType, paginationDataType } from "@/data/types";
import axios from "axios";
import { create } from "zustand";
type useProductType = {
  productsData: foodDataType[];
  productsDataShown: foodDataType[];
  totalNumbersOfProductsInDatabase: number;
  setTotalNumberOfProductsInDatabase: () => void;
  firstTimeLoadData: () => void;
  loadDataAccordingPagination: (data: paginationDataType) => void;
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
  };
});
export default useProduct;
