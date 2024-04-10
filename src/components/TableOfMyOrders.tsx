"use client";
import {
  GET_ORDERS_DATA_OF_SPECIFIC_USER_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import useUser from "@/utils/ZustandUser";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MyOrdersTableRows from "./MyOrdersTableRows";
type dataFetchingStatusType = "STOPPED" | "LOADING" | "SUCCESS" | "FAILED";
const TableOfMyOrders = () => {
  const [dataFetchingStatus, setDataFetchingStatus] = useState(
    "STOPPED" as dataFetchingStatusType
  );
  const ordersPlacedByUser = useUser((state) => state.ordersPlacedByUser);
  const setOrdersPlacedByUser = useUser((state) => state.setOrdersPlacedByUser);
  const loadData = () => {
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    if (authToken) {
      setDataFetchingStatus("LOADING");
      axios
        .post(GET_ORDERS_DATA_OF_SPECIFIC_USER_API, { authToken })
        .then((response) => {
          const receivedData = response.data.data;
          setOrdersPlacedByUser(receivedData);
          setDataFetchingStatus("SUCCESS");
        })
        .catch((error) => {
          console.log(error);
          setDataFetchingStatus("FAILED");
        });
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(ordersPlacedByUser.length);
  return (
    <>
      {dataFetchingStatus === "SUCCESS" && (
        <>
          {ordersPlacedByUser.length > 0 && (
            <table
              style={{
                tableLayout: "fixed",
                wordWrap: "break-word",
              }}
              className="border  w-[90%] text-xs md:text-lg lg:text-2xl text-center"
              border={1}
            >
              <thead>
                <tr>
                  <th className="border w-[25%] p-2 md:py-5">ORDER ID</th>
                  <th className="border w-[25%] p-2 md:py-5">CREATED</th>
                  <th className="border w-[25%] p-2 md:py-5">STATUS</th>
                  <th className="border w-[25%] p-2 md:py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ordersPlacedByUser.map((data) => {
                  console.log(data);
                  return <MyOrdersTableRows data={data} key={Math.random()} />;
                })}
              </tbody>
            </table>
          )}
          {ordersPlacedByUser.length < 1 && (
            <>
              <div className="text-center text-red-600 font-bold md:text-xl lg:text-3xl">
                You did not placed any Orders Yet
              </div>
            </>
          )}
        </>
      )}
      {dataFetchingStatus === "LOADING" && (
        <>
          {ordersPlacedByUser.length > 0 && (
            <div>
              <div className="text-center opacity-[0.6] font-bold md:text-xl lg:text-3xl">
                <span className=" animate-ping">Loading, Please Wait</span>
                <span>
                  <img
                    src="/images/icons/spinner-2.png"
                    className="inline animate-spin"
                    alt=""
                  />
                </span>
              </div>
            </div>
          )}
        </>
      )}
      {dataFetchingStatus === "FAILED" && (
        <>
          <div className="text-center text-red-600 font-bold md:text-xl lg:text-3xl">
            Oops! Loading Failed.
          </div>

          <div className="ml-3">
            <button
              onClick={() => {
                loadData();
              }}
              className="bg-[#2BB673] px-1 md:px-3 py-1 rounded font-bold text-[white] active:scale-[0.95]"
            >
              TryAgain
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default TableOfMyOrders;
