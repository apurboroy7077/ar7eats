import React from "react";

const CancelReservationPopup = () => {
  return (
    <div className="fixed top-0 bg-black bg-opacity-50 left-0 w-full  h-full flex justify-center items-center">
      <div className="w-[90%] max-w-[60rem] bg-white py-2 rounded relative">
        <div className=" absolute right-2 top-1">X</div>
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
              <div>Saturday, 28 February, 2022</div>
              <div>04:20 pm</div>
              <div>2 people (standard seating)</div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center flex justify-center gap-3 ">
          <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
            Cancel
          </button>
          <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F9E1E1] text-[#F54748] px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelReservationPopup;
