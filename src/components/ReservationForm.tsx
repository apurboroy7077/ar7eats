"use client";

import {
  BOOK_RESERVATION_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import axios from "axios";
import { useEffect, useState } from "react";

const ReservationForm = () => {
  const [loginStatus, setLoginStatus] = useState("NOTLOGGEDIN");
  const [serverMessage, setServerMessage] = useState("");
  const [fetchingStatus, setFetchingStatus] = useState("STOPPED");
  useEffect(() => {
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    if (authToken) {
      setLoginStatus("LOGGEDIN");
    }
  }, []);
  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const time = formData.get("time");
    const numberOfSits = formData.get("sits");
    const dataForServer = { date, time, numberOfSits, authToken };

    setFetchingStatus("ONGOING");
    axios
      .post(BOOK_RESERVATION_API, dataForServer)
      .then((response) => {
        setFetchingStatus("SUCCESS");
        setServerMessage("");
        console.log(response);
      })
      .catch((error) => {
        setFetchingStatus("STOPPED");
        const serverMessage = error.response.data.message;
        setServerMessage(serverMessage);
      });
  };
  return (
    <>
      {loginStatus === "LOGGEDIN" && (
        <form onSubmit={handleReservation}>
          <div className="flex flex-col gap-7 mt-3">
            <div className=" text-center lg:text-left text-xl font-bold md:text-2xl lg:text-5xl">
              Book a Table
            </div>
            {serverMessage && (
              <div className="mb-1 md:mb-10 text-center text-sm md:text-base">
                {serverMessage}
              </div>
            )}
            {fetchingStatus !== "SUCCESS" && (
              <>
                <div className="text-center">
                  <input
                    name="date"
                    type="date"
                    className="w-full border-[1px] bg-[#FFFFFF] px-5 py-2 rounded-xl border-[#b3afaf]"
                  />
                </div>
                <div className="text-center">
                  <input
                    name="time"
                    type="time"
                    className="w-full border-[1px] bg-[#FFFFFF] px-5 py-2 rounded-xl border-[#b3afaf]"
                  />
                </div>
                <div className="text-center">
                  <input
                    name="sits"
                    type="number"
                    placeholder="Sits"
                    className="w-full border-[1px] bg-[#FFFFFF] px-5 py-2 rounded-xl border-[#b3afaf]"
                  />
                </div>
              </>
            )}

            <div className="text-center">
              {fetchingStatus === "STOPPED" && (
                <button
                  type="submit"
                  className=" w-full rounded-xl text-sm font-medium bg-[#F54748] text-white px-3 py-2 lg:text-xl active:scale-[0.95]"
                >
                  Book Now
                </button>
              )}
              {fetchingStatus === "ONGOING" && (
                <button className=" w-full rounded-xl text-sm font-medium bg-[#F54748] text-white px-3 py-2 lg:text-xl active:scale-[0.95]">
                  Booking{" "}
                  <img
                    src="/images/icons/spinner-2.png"
                    className="inline w-[1.5rem] animate-spin"
                    alt=""
                  />
                </button>
              )}
              {fetchingStatus === "SUCCESS" && (
                <button className=" w-full rounded-xl text-sm font-medium border-[2px] border-[black]   px-3 py-2 lg:text-xl active:scale-[0.95]">
                  Booked{" "}
                  <img
                    src="/images/icons/checked.png"
                    className="inline w-[1.5rem] "
                    alt=""
                  />
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {loginStatus === "NOTLOGGEDIN" && (
        <div className="text-center p-5 font-bold md:text-2xl lg:text-3xl">
          Please Login to Book a Reservation
        </div>
      )}
    </>
  );
};

export default ReservationForm;
