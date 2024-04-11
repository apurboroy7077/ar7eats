"use client";
import GenerateStars from "@/utils/GenerateStars";
import React, { useMemo } from "react";
import CartListItem from "./CartListItem";
import useCart from "@/utils/ZustandCart";
import { cartDataType } from "@/data/types";
import foodData from "@/data/foodData";
import axios from "axios";
import { GENERATE_DATA_API, UPDATE_DATABASE_API_1 } from "@/data/Variables";
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
    <>
      <ul className="flex  flex-col items-center justify-center gap-5 md:gap-10">
        {cartListCodes}
      </ul>
      {cartData.length < 1 && (
        <div>
          <div className="text-center md:text-xl lg:text-3xl">
            Your Cart is Empty
          </div>
          <div className="flex items-center justify-center my-5 md:my-7 lg:my-10">
            <img
              className="  w-[5rem] md:w-[7rem] lg:w-[9rem]"
              src="/images/icons/sad-cake.png"
              alt=""
              onClick={() => {
                axios
                  .post(UPDATE_DATABASE_API_1, {})
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CartList;
