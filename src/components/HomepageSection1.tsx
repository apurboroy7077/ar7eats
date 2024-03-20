import React from "react";

const HomepageSection1 = () => {
  return (
    <section className=" bg-gradient-to-b from-[#F9DEDD] to-[white]">
      <div className="pt-5">
        <div className="text-center text-xl font-bold">
          Best Restaurent In <span className="text-[#F54748] ">Town.</span>
        </div>
        <div className="text-sm text-center mt-3 opacity-[0.75] ">
          We provide best food in town, we also provide Home Delivery Services.
        </div>
        <div className="mt-5 text-center flex justify-center gap-3">
          <button className=" w-[6rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-lg active:scale-[0.95]">
            Order Now
          </button>
          <button className=" w-[6rem] text-sm font-medium bg-[#F9E1E1] text-[#F54748] px-3 py-2 rounded lg:text-lg active:scale-[0.95]">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection1;
