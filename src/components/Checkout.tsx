"use client";

import {
  CARTDATA_KEYNAME_IN_LOCALSTORAGE,
  CONFIRM_ORDER_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import useTotalPrice from "@/utils/TotalPriceInCart";

import useCart from "@/utils/ZustandCart";
import axios from "axios";

const Checkout = () => {
  const cartData = useCart((state: any) => state.cartData);
  const openConfirmOrderPopup = useCart(
    (state: any) => state.openConfirmOrderPopup
  );
  const handleClickOrder = () => {
    openConfirmOrderPopup();
  };
  const handleConfirmOrder = () => {
    const cartData = localStorage.getItem(CARTDATA_KEYNAME_IN_LOCALSTORAGE);
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);

    if (cartData) {
      const processedCartData = JSON.parse(cartData);

      const dataForServer = { processedCartData, authToken };
      axios
        .post(CONFIRM_ORDER_API, dataForServer)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const theTotalPrice = useTotalPrice();
  if (cartData.length < 1) {
    return null;
  }
  return (
    <>
      <div className=" mt-20">
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="flex justify-between items-cen ter">
            <div className="font-bold text-lg md:text-3xl">
              Total({cartData.length} Items)
            </div>
            <div className="opacity-[0.7] font-medium md:text-2xl">$45</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-medium opacity-[0.7] md:text-2xl">
              Delivery Charges
            </div>
            <div className="font-medium opacity-[0.7] md:text-2xl">$0</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-medium opacity-[0.7] md:text-2xl">
              Discount(0%)
            </div>
            <div className="font-medium opacity-[0.7] md:text-2xl">0$</div>
          </div>
          <div>
            <div className="text-center md:text-3xl font-medium mt-5">
              Payable Amount:{" "}
              <span className="text-[#2BB673] font-bold">${theTotalPrice}</span>
            </div>
          </div>
          <div className="">
            <div>
              <button
                onClick={handleClickOrder}
                className="md:text-2xl w-full bg-[#2BB673] py-2 md:py-5 rounded text-white font-bold active:scale-[0.95]"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
