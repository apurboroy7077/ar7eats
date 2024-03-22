const CustomerReviewSection = () => {
  return (
    <section className=" overflow-hidden px-3  lg:px-[7vw] py-5 lg:py-16   md:px-[3rem]  ">
      <div className="pt-5 lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="text-center lg:pb-16 text-lg font-bold md:text-2xl lg:text-5xl">
          What Our Customers Say
        </div>
        <div className="mt-7 flex items-center justify-center">
          <div className="max-w-[90%] md:max-w-[70%]">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              &quot;
            </div>
            <div className="text-sm md:text-lg  opacity-[0.7] text-justify px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              at velit quidem. Iure officiis iusto suscipit sit modi
              necessitatibus deleniti!
            </div>
            <div className="text-end text-3xl md:text-4xl lg:text-5xl font-bold">
              &quot;
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:mt-7">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div>
              <img
                src="/images/people/elon-musk.png"
                alt=""
                className="w-[7rem] md:w-[9rem] rounded-full"
              />
            </div>
            <div>
              <div className="text-center font-medium md:text-2xl">
                Elon Musk
              </div>
              <div className="text-center text-xs md:text-lg opacity-[0.8]">
                CEO of Space-X
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
