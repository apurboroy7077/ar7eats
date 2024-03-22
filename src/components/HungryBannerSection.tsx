const HungryBannerSection = () => {
  return (
    <section className=" overflow-hidden px-3  lg:px-[7vw] py-5 lg:py-16   md:px-[3rem]  ">
      <div className="py-5 lg:py-10 lg:gap-10 lg:max-w-[80rem] lg:m-auto bg-[#FDD9D9] rounded-lg">
        <div className="text-center lg:py-10  font-bold text-lg md:text-2xl  lg:text-5xl">
          Hungry? We are Open Now...
        </div>
        <div className="mt-5 text-center flex justify-center gap-3 ">
          <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
            Order Now
          </button>
          <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#FEECEC] text-[#F54748] px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HungryBannerSection;
