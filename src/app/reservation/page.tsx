import BookedTables from "@/components/BookedTables";
import ReservationForm from "@/components/ReservationForm";
import React from "react";

const page = () => {
  return (
    <section className=" overflow-hidden px-3  lg:px-[7vw] py-5 lg:py-16 bg-[#FAFAFA]  md:px-[3rem]  ">
      <div className="py-5 lg:py-10 lg:gap-10 lg:max-w-[80rem] lg:m-auto  rounded-lg">
        <div>
          <div className="md:flex items-center justify-center">
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg w-full md:w-[80%] md:h-[25rem] md:object-cover"
                src="/images/others/table-booking.jpg"
                alt=""
              />
            </div>
            <ReservationForm />
          </div>
        </div>
        <div className="mt-10">
          <BookedTables />
        </div>
      </div>
    </section>
  );
};

export default page;
