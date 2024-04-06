import CartList from "@/components/CartList";
import Checkout from "@/components/Checkout";
import ConfirmOrderPopup from "@/components/ConfirmOrderPopup";
import GenerateStars from "@/utils/GenerateStars";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-[80rem]  m-3 ">
        <div className="text-center text-xl md:text-3xl lg:text-4xl font-bold">
          Cart
        </div>
        <div className="mt-5 md:mt-10">
          <CartList />
        </div>
        <Checkout />
        <ConfirmOrderPopup />
      </div>
    </section>
  );
};

export default page;
