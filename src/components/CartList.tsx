"use client";
import GenerateStars from "@/utils/GenerateStars";
import React, { useMemo } from "react";
import CartListItem from "./CartListItem";
import useCart from "@/utils/ZustandCart";
import { cartDataType } from "@/data/types";
import foodData from "@/data/foodData";
type stateType = {
  cartDate: string;
};

const CartList = () => {
  const cartData: cartDataType = useCart((state: any) => state.cartData);
  const cartListCodes = useMemo(() => {
    return (
      <>
        {cartData.map((data) => {
          return <CartListItem productData={data} key={Math.random()} />;
        })}
      </>
    );
  }, [cartData.length]);
  return (
    <ul className="flex flex-col items-center justify-center gap-5 md:gap-10">
      {cartListCodes}
    </ul>
  );
};

export default CartList;
