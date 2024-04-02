const Checkout = () => {
  return (
    <div className=" mt-20">
      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg md:text-3xl">Total(3 Items)</div>
          <div className="opacity-[0.7] font-medium md:text-2xl">$45</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-medium opacity-[0.7] md:text-2xl">
            Delivery Charges
          </div>
          <div className="font-medium opacity-[0.7] md:text-2xl">$2.12</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-medium opacity-[0.7] md:text-2xl">
            Discount(25%)
          </div>
          <div className="font-medium opacity-[0.7] md:text-2xl">$6.30</div>
        </div>
        <div>
          <div className="text-center md:text-3xl font-medium mt-5">
            Payable Amount:{" "}
            <span className="text-[#2BB673] font-bold">$15</span>
          </div>
        </div>
        <div className="">
          <div>
            <button className="md:text-2xl w-full bg-[#2BB673] py-2 md:py-5 rounded text-white font-bold active:scale-[0.95]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
