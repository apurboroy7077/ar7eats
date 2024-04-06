import {
  CARTDATA_KEYNAME_IN_LOCALSTORAGE,
  GET_FOOD_DATA_API,
} from "@/data/Variables";
import { foodDataType } from "@/data/foodData";
import { cartDataType } from "@/data/types";
import axios from "axios";
import { create } from "zustand";

const useCart = create((set) => ({
  cartData: [] as cartDataType,
  dataOfSavedCartItems: [] as foodDataType,
  confirmOrderPopupStatus: "CLOSED",
  loadCartData: () => {
    const savedCartData = localStorage.getItem(
      CARTDATA_KEYNAME_IN_LOCALSTORAGE
    );
    if (savedCartData) {
      const processedCartData = JSON.parse(savedCartData);
      set((state: any) => {
        return {
          ...state,
          cartData: processedCartData,
        };
      });
    }
  },
  addToCart: (id: string) => {
    set((state: any) => {
      for (let i = 0; i < state.cartData.length; i++) {
        let data = state.cartData[i];
        if (data.id === id) {
          return state;
        }
      }
      const newProductData = { id: id, amount: 1 };
      const updatedCartData = [...state.cartData, newProductData];
      const newState = { ...state, cartData: updatedCartData };
      localStorage.setItem(
        CARTDATA_KEYNAME_IN_LOCALSTORAGE,
        JSON.stringify(updatedCartData)
      );
      return newState;
    });
  },
  increaseAmount: (id: string) => {
    set((state: any) => {
      let cartDataCopy = [...state.cartData];
      for (let i = 0; i < cartDataCopy.length; i++) {
        let itemData = cartDataCopy[i];
        if (itemData.id === id) {
          itemData.amount++;
        }
      }
      const updatedCartData = cartDataCopy;
      const newState = { ...state, cartData: updatedCartData };
      localStorage.setItem(
        CARTDATA_KEYNAME_IN_LOCALSTORAGE,
        JSON.stringify(updatedCartData)
      );
      return newState;
    });
  },
  decreaseAmount: (id: string) => {
    set((state: any) => {
      let cartDataCopy = [...state.cartData];
      for (let i = 0; i < cartDataCopy.length; i++) {
        let itemData = cartDataCopy[i];
        if (itemData.id === id && itemData.amount > 1) {
          itemData.amount--;
        }
      }
      const updatedCartData = cartDataCopy;
      const newState = { ...state, cartData: updatedCartData };
      localStorage.setItem(
        CARTDATA_KEYNAME_IN_LOCALSTORAGE,
        JSON.stringify(updatedCartData)
      );
      return newState;
    });
  },
  deleteFromCart: (id: string) => {
    set((state: any) => {
      const updatedCartData = [];
      for (let i = 0; i < state.cartData.length; i++) {
        let cartItem = state.cartData[i];
        if (cartItem.id !== id) {
          updatedCartData.push(cartItem);
        }
      }
      const newState = { ...state, cartData: updatedCartData };
      localStorage.setItem(
        CARTDATA_KEYNAME_IN_LOCALSTORAGE,
        JSON.stringify(updatedCartData)
      );
      return newState;
    });
  },
  loadDataOfSavedCartItems: async () => {
    const rawCartData = localStorage.getItem(CARTDATA_KEYNAME_IN_LOCALSTORAGE);
    if (rawCartData) {
      const cartData = JSON.parse(rawCartData);
      const savedCartData: any = [];
      await new Promise((resolve, reject) => {
        let executionNumber = 0;
        for (let i = 0; i < cartData.length; i++) {
          const data = cartData[i];
          const { id } = data;
          axios
            .post(GET_FOOD_DATA_API, { id })
            .then((response) => {
              const receivedData = response.data.data;
              savedCartData.push(receivedData);
              executionNumber++;
              if (executionNumber === cartData.length - 1) {
                resolve("Fetch Successful");
              }
            })
            .catch((error) => {
              console.log(error);
              resolve(error);
            });
        }
      });
      set((state: any) => {
        const newState = { ...state, dataOfSavedCartItems: savedCartData };
        return newState;
      });
    }
  },
  openConfirmOrderPopup: () => {
    set((state: any) => {
      const newState = { ...state, confirmOrderPopupStatus: "OPENED" };
      return newState;
    });
  },
  closeConfirmOrderPopup: () => {
    set((state: any) => {
      const newState = { ...state, confirmOrderPopupStatus: "CLOSED" };
      return newState;
    });
  },
  clearCart: () => {
    set((state: any) => {
      const newState = { ...state, cartData: [] };
      return newState;
    });
  },
}));
export default useCart;
