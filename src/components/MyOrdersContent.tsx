"use client";
import useCart from "@/utils/ZustandCart";
import useUser, { useUserType } from "@/utils/ZustandUser";
import React, { useEffect } from "react";
import TableOfMyOrders from "./TableOfMyOrders";

const MyOrdersContent = () => {
  const loginStatus = useUser((state) => state.loginStatus);

  return (
    <>
      {loginStatus === "LOGGED_IN" && <TableOfMyOrders />}
      {loginStatus === "NOT_LOGGED_IN" && (
        <div className="text-center font-bold md:text-xl lg:text-3xl">
          Please Log in to View Your Orders.
        </div>
      )}
    </>
  );
};

export default MyOrdersContent;
