import {
  CANCEL_RESERVATION_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import { savedSingleTableData } from "@/data/types";
import { useCancelReservation } from "@/utils/ZustandCancelReservationStore";
import axios from "axios";
import React from "react";
type propsType = {
  data: savedSingleTableData;
};
const TablesSingleList = (props: propsType) => {
  const { data } = props;
  const { id, time, sits, date } = data;
  const openPopup = useCancelReservation((state: any) => state.openPopup);
  const setReservationDetails = useCancelReservation(
    (state: any) => state.setReservationDetails
  );
  const handleOpenPopup = () => {
    setReservationDetails(data);
    openPopup();
  };

  return (
    <li
      key={id}
      className="border rounded-md p-4 mb-4 flex justify-between items-center"
    >
      <div>
        <div className="text-lg font-semibold">{time}</div>
        <div className="text-gray-500">{date}</div>
        <div>{sits} sits</div>
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          onClick={handleOpenPopup}
        >
          Cancel
        </button>
      </div>
    </li>
  );
};

export default TablesSingleList;
