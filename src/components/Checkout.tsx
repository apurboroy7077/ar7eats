"use client";

import {
  CARTDATA_KEYNAME_IN_LOCALSTORAGE,
  CONFIRM_ORDER_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  SIGN_IN_PAGE_ADDRESS,
} from "@/data/Variables";
import useTotalPrice from "@/utils/TotalPriceInCart";

import useCart from "@/utils/ZustandCart";
import useUser from "@/utils/ZustandUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Checkout = () => {
  const router = useRouter();
  const cartData = useCart((state: any) => state.cartData);
  const openConfirmOrderPopup = useCart(
    (state: any) => state.openConfirmOrderPopup
  );
  const loginStatus = useUser((state) => state.loginStatus);
  const handleClickOrder = () => {
    if (loginStatus === "LOGGED_IN") {
      openConfirmOrderPopup();
    } else if (loginStatus === "NOT_LOGGED_IN") {
      toast("Please Login to Place Order");
      setTimeout(() => {
        router.push(SIGN_IN_PAGE_ADDRESS);
      }, 2000);
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
