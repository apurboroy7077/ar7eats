import { CARTDATA_KEYNAME_IN_LOCALSTORAGE } from "@/data/Variables";
import { cartDataType } from "@/data/types";
import { create } from "zustand";

const useCart = create((set) => ({
  cartData: [] as cartDataType,
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
}));
export default useCart;
