"use client";
import {
  CANCEL_RESERVATION_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import {
  useCancelReservation,
  useCancelReservationStateType,
} from "@/utils/ZustandCancelReservationStore";
import useReservation from "@/utils/ZustandReservation";
import axios from "axios";
import React, { useState } from "react";
type stateType = {
  popupStatus: string;
};
const CancelReservationPopup = () => {
  const [fetchingStatus, setFetchingStatus] = useState("STOPPED");
  const popupStatus = useCancelReservation((state: any) => state.popupStatus);
  const closePopup = useCancelReservation((state: any) => state.closePopup);
  const reservationDetails = useCancelReservation(
    (state: any) => state.reservationDetails
  );
  const fetchBookedTables = useReservation(
    (state: any) => state.fetchBookedTablesData
  );

  const { id, time, sits, date } = reservationDetails;
  const handleClosePopup = () => {
    closePopup();
  };
  const handleConfirmCancelReservation = () => {
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    const dataForServer = { id, authToken };
    setFetchingStatus("ONGOING");
    axios
      .post(CANCEL_RESERVATION_API, dataForServer)
      .then((response) => {
        setFetchingStatus("STOPPED");
        console.log(response);
        fetchBookedTables();
        closePopup();
      })
      .catch((error) => {
        setFetchingStatus("STOPPED");
        console.log(error);
      });
  };
  if (popupStatus === "CLOSED") {
    return null;
  }
  return (
    <div className="fixed top-0 bg-black bg-opacity-50 left-0 w-full  h-full flex justify-center items-center">
      <div className="w-[90%] max-w-[60rem] bg-white py-2 rounded relative">
        <div onClick={handleClosePopup} className=" absolute right-2 top-1">
          X
        </div>
        <div className="text-center md:py-3 text-lg font-bold md:text-3xl">
          Reservations
        </div>
        <div className="bg-[#FF8A00] text-lg md:text-2xl my-2  text-white font-bold p-3 md:p-5 text-center">
          Are you sure you want to cancel the reservation?
        </div>
        <div className="md:my-5">
          <img
            className="w-[4rem]  md:w-[7rem] m-auto"
            src="/images/icons/confused.png"
            alt=""
          />
        </div>
        <div className="text-center md:text-2xl mt-3 md:mt-5 font-bold ">
          Reservation Details
        </div>
        <div className=" my-2 md:mb-7 px-2   font-medium opacity-[0.8] ">
          <div className="flex items-center justify-center">
            <div className="md:flex items-center justify-center gap-5">
              <div>{date}</div>
              <div>{time}</div>
              <div>{sits} People</div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center flex justify-center gap-3 ">
          {fetchingStatus === "STOPPED" && (
            <button
              onClick={handleConfirmCancelReservation}
              className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]"
            >
              Cancel
            </button>
          )}
          {fetchingStatus === "ONGOING" && (
            <button className=" text-nowrap w-[8rem] lg:w-[10rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
              Canceling{" "}
              <img
                src="/images/icons/spinner-2.png"
                className="inline w-[1.5rem] animate-spin"
                alt=""
              />
            </button>
          )}
          <button
            onClick={closePopup}
            className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F9E1E1] text-[#F54748] px-3 py-2 rounded lg:text-xl active:scale-[0.95]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelReservationPopup;
