import {
  GET_BOOKED_TABLE_DATA_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import { savedTablesData } from "@/data/types";
import axios from "axios";
import { create } from "zustand";

const useReservation = create((set) => ({
  bookedTables: [] as savedTablesData,
  setBookedTablesData: (data: any) => {
    set(() => ({
      bookedTables: data,
    }));
  },
  fetchBookedTablesData: (data: any) => {
    const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    if (authToken) {
      axios
        .post(GET_BOOKED_TABLE_DATA_API, { authToken })
        .then((response) => {
          const updatedBookedTablesData = response.data.data;
          set(() => ({
            bookedTables: updatedBookedTablesData,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}));

export default useReservation;
