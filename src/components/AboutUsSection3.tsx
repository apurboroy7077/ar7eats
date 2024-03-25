const AboutUsSection3 = () => {
  return (
    <section className=" overflow-hidden bg-[#F9DEDD] py-5 lg:py-10   px-3 md:px-[3rem] lg:px-[7vw] ">
      <div className=" md:flex md:flex-row-reverse items-center justify-between lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="md:max-w-[60%] lg:max-w-[50%]">
          <div className="text-center lg:text-left text-xl font-bold md:text-2xl lg:text-5xl">
            <span className="text-[#F54748] ">Owner</span> and Executive Chef
          </div>
          <div className="my-0 md:mt-2 md:mb-5 opacity-[0.7] font-medium text-center lg:text-left text-xl  md:text-2xl lg:text-5xl">
            Chan Mia
          </div>
          <div className="text-sm lg:text-xl text-center lg:text-left mt-3 opacity-[0.75] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, qui
            enim. Corrupti iusto at ab exercitationem numquam voluptas quasi id!
            Magni reprehenderit odit facere, suscipit debitis, provident fugiat
            quis veritatis nobis harum explicabo ratione facilis atque
            voluptatum quam cumque eius autem cum id veniam. Vel porro soluta
            debitis ducimus nulla.
          </div>
          <div className="mt-5 text-center flex justify-center gap-3 lg:justify-start">
            <button className=" w-[6rem] lg:w-[8rem] text-sm font-medium bg-[#F54748] text-white px-3 py-2 rounded lg:text-xl active:scale-[0.95]">
              Order Now
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center ">
            <div className="rounded-full overflow-hidden">
              <img
                src="/images/chefs/gordon-ramsey-2.png"
                className="w-[13rem] lg:w-[30rem] hover:scale-[1.1]"
                style={{ transition: "all 1s ease" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection3;
