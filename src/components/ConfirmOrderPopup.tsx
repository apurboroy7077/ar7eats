"use client";
import {
  CANCEL_RESERVATION_API,
  CONFIRM_ORDER_API,
  GET_FOOD_DATA_API_2,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import { confirmOrderDetailsDataType } from "@/data/types";
import totalPrice from "@/utils/TotalPriceInCart";
import {
  useCancelReservation,
  useCancelReservationStateType,
} from "@/utils/ZustandCancelReservationStore";
import useCart from "@/utils/ZustandCart";
import useReservation from "@/utils/ZustandReservation";
import axios from "axios";
import React, { useEffect, useState } from "react";
type stateType = {
  popupStatus: string;
};
type detailsType = null | confirmOrderDetailsDataType;
type fetchStatus = "STOPPED" | "LOADING" | "SUCCESS" | "FAILED";
const ConfirmOrderPopup = () => {
  const [loadingDataStatus, setLoadingDataStatus] = useState(
    "STOPPED" as fetchStatus
  );
  const [confirmOrderStatus, setConfirmOrderStatus] = useState(
    "STOPPED" as fetchStatus
  );
  const confirmOrderPopupStatus = useCart(
    (state: any) => state.confirmOrderPopupStatus
  );
  const closeConfirmOrderPopup = useCart(
    (state: any) => state.closeConfirmOrderPopup
  );
  const [details, setDetails] = useState(null as detailsType);
  const cartData = useCart((state: any) => state.cartData);
  const clearCart = useCart((state: any) => state.clearCart);
  const [fetchingStatus, setFetchingStatus] = useState("STOPPED");
  const popupStatus = useCancelReservation((state: any) => state.popupStatus);
  const closePopup = useCancelReservation((state: any) => state.closePopup);
  const reservationDetails = useCancelReservation(
    (state: any) => state.reservationDetails
  );
  const fetchBookedTables = useReservation(
    (state: any) => state.fetchBookedTablesData
  );

  useEffect(() => {
    if (confirmOrderPopupStatus === "OPENED") {
      setLoadingDataStatus("LOADING");
      axios
        .post(GET_FOOD_DATA_API_2, { cartData })
        .then((response) => {
          const receivedData = response.data.dataForClient;
          setDetails(receivedData);
          setLoadingDataStatus("SUCCESS");
        })
        .catch((error) => {
          console.log(error);
          setLoadingDataStatus("FAILED");
        });
    }
  }, [confirmOrderPopupStatus]);

  const { id, time, sits, date } = reservationDetails;
  const handleClosePopup = () => {
    setDetails(null);

    closeConfirmOrderPopup();
  };
  const handleConfirmOrder = () => {
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    const dataForServer = { cartData, authToken };
    setConfirmOrderStatus("LOADING");
    axios
      .post(CONFIRM_ORDER_API, dataForServer)
      .then((response) => {
        console.log(response);
        setConfirmOrderStatus("SUCCESS");
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        setConfirmOrderStatus("FAILED");
      });
  };
  if (confirmOrderPopupStatus === "CLOSED") {
    return null;
  }
  return (
    <div className="fixed z-[10] top-0 bg-black bg-opacity-50 left-0 w-full overflow-scroll  h-full flex justify-center items-center">
      <div className="w-[90%] max-w-[60rem] bg-white py-2 h-fit rounded relative">
        <div onClick={handleClosePopup} className=" absolute right-2 top-1">
          X
        </div>
        <div className="text-center md:py-3 text-lg font-bold md:text-3xl">
          Confirm Order
        </div>
        <div className="bg-[#40C66F] text-lg md:text-2xl lg:text-3xl my-2  text-white font-bold p-3 md:p-5 text-center">
          Are you sure you want to confirm the Order?
        </div>
        <div className="md:my-5">
          {confirmOrderStatus !== "SUCCESS" && (
            <img
              className="w-[4rem]  md:w-[7rem] lg:w-[11rem] m-auto"
              src="/images/icons/chef-2.png"
              alt=""
            />
          )}
          {confirmOrderStatus === "SUCCESS" && (
            <img
              className="w-[4rem]  md:w-[7rem] lg:w-[11rem] m-auto"
              src="/images/icons/chef-smiling.png"
              alt=""
            />
          )}
        </div>
        <div className="text-center md:text-2xl lg:text-3xl my-3 md:my-5 lg:my-10 font-bold ">
          Order Details
        </div>
        <div className=" my-2 md:mb-7 px-2   font-medium opacity-[0.8] ">
          <div className="flex items-center justify-center">
            <div className=" w-full ">
              {/* {loadingDataStatus === "SUCCESS" && (
                <ol className="flex flex-col  w-full gap-3 md:gap-5 ">
                  {details?.productsData.map((data) => {
                    const { name, totalPriceOfThisProduct, amount } = data;
                    return (
                      <li className="text-nowrap text-xs md:text-lg lg:text-xl w-full  flex justify-around items-center  gap-2 text-start ">
                        <div className="font-bold">{name}</div>
                        <div className="">
                          <span className="font-bold">Quantity:</span> {amount}
                        </div>
                        <div className=" ">
                          <span className="font-bold">Price:</span>{" "}
                          {totalPriceOfThisProduct}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )} */}
              {loadingDataStatus === "SUCCESS" &&
                confirmOrderStatus !== "SUCCESS" && (
                  <>
                    <div className="border-[black] rounded-lg overflow-hidden border-[2px] md:border-[3px] lg:border-[7px]">
                      <div className="h-[7rem] md:h-[13rem] lg:h-[17rem]   rounded overflow-y-auto">
                        <table className="w-full md:text-lg lg:text-xl text-center border-collapse ">
                          <thead>
                            <tr>
                              <th className="w-[33.33%] md:p-3 border-[1px] border-[black]">
                                Name
                              </th>
                              <th className="w-[33.33%] md:p-3 border-[1px] border-[black]">
                                Quantity
                              </th>
                              <th className="w-[33.33%] md:p-3 border-[1px] border-[black]">
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {details?.productsData.map((data) => {
                              const { name, totalPriceOfThisProduct, amount } =
                                data;
                              return (
                                <tr key={Math.random()}>
                                  <td className="border-[1px] md:p-3 border-[black]">
                                    {name}
                                  </td>
                                  <td className="border-[1px] md:p-3 border-[black]">
                                    {amount}
                                  </td>
                                  <td className="border-[1px] md:p-3 border-[black]">
                                    {Number(totalPriceOfThisProduct).toFixed(2)}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <div className="text-center my-5 md:my-7 lg:my-10 md:text-lg lg:text-3xl">
                        Total Price:{" "}
                        {`${Number(details?.totalPrice).toFixed(2)}$`}
                      </div>
                    </div>
                  </>
                )}
              {loadingDataStatus === "LOADING" && (
                <div className="text-center mb-5">
                  <span className=" animate-pulse md:text-xl lg:text-2xl">
                    Loading{" "}
                  </span>
                </div>
              )}
              {loadingDataStatus === "FAILED" && (
                <div className="text-center mb-5">
                  <span className=" animate-pulse md:text-xl lg:text-2xl">
                    Error Loading Data{" "}
                  </span>
                </div>
              )}
              {confirmOrderStatus === "SUCCESS" && (
                <>
                  <div className="my-3 ">
                    <div className="text-center md:text-xl lg:text-3xl">
                      <span>Order Successful</span>
                      <span className="ml-2 md:ml-4">
                        <img
                          className="w-[1.5rem] md:w-[2rem] lg:w-[3rem] inline"
                          src="/images/icons/checked.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {loadingDataStatus === "SUCCESS" && (
          <div className=" mb-10 text-center flex justify-center ml-3 gap-3 md:gap-5">
            {confirmOrderStatus === "STOPPED" && (
              <button
                onClick={handleConfirmOrder}
                className=" text-nowrap w-[8rem] lg:w-[13rem] text-sm lg:text-2xl  font-medium bg-[#40C66F] text-white px-3 py-2 rounded  active:scale-[0.95]"
              >
                Confirm Order
              </button>
            )}
            {confirmOrderStatus === "FAILED" && (
              <button
                onClick={handleConfirmOrder}
                className=" text-nowrap w-[8rem] lg:w-[13rem] text-sm lg:text-2xl  font-medium bg-[#F54748] text-white px-3 py-2 rounded  active:scale-[0.95]"
              >
                Try Again
              </button>
            )}
            {confirmOrderStatus === "LOADING" && (
              <button className=" text-nowrap w-[8rem] lg:w-[13rem] text-sm lg:text-xl font-medium bg-[#40C66F] text-white px-3 py-2 rounded  active:scale-[0.95]">
                Processing{" "}
                <img
                  className="inline w-[1.5rem] animate-spin ml-1"
                  src="/images/icons/spinner-2.png"
                  alt=""
                />
              </button>
            )}
            <button
              onClick={handleClosePopup}
              className="  w-[6rem] lg:w-[13rem] text-sm lg:text-2xl font-medium bg-[white] border-[2px] border-[black] text-[black] px-3 py-2 rounded  active:scale-[0.95]"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmOrderPopup;
