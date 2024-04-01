"use client";
import {
  CANCEL_RESERVATION_API,
  GET_BOOKED_TABLE_DATA_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import { savedTablesData } from "@/data/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CancelReservationPopup from "./CancelReservationPopup";
import TablesSingleList from "./TablesSingleList";
import useReservation from "@/utils/ZustandReservation";

const BookedTables = () => {
  const bookedTablesData = useReservation((state: any) => state.bookedTables);
  const setBookedTablesData = useReservation(
    (state: any) => state.setBookedTablesData
  );
  useEffect(() => {
    let authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    if (authToken) {
      axios
        .post(GET_BOOKED_TABLE_DATA_API, { authToken })
        .then((response) => {
          const serverData = response.data.data;
          setBookedTablesData(serverData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      {bookedTablesData.length > 0 && (
        <>
          <div className="text-center lg:text-left text-2xl lg:text-5xl font-bold mb-8">
            Booked Tables
          </div>
          <div>
            <ul>
              {bookedTablesData.map((data: any) => {
                return (
                  <TablesSingleList
                    key={Math.random().toString()}
                    data={data}
                  />
                );
              })}
            </ul>
          </div>
          <CancelReservationPopup />
        </>
      )}
    </>
  );
};

export default BookedTables;
