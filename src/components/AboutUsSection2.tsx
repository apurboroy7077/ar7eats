import React from "react";

const AboutUsSection2 = () => {
  return (
    <section className=" overflow-hidden bg-[#E7F9ED]  py-5 lg:py-10   px-3 md:px-[3rem] lg:px-[7vw] ">
      <div className=" md:flex  items-center justify-between lg:gap-10 lg:max-w-[80rem] lg:m-auto">
        <div className="md:max-w-[60%] lg:max-w-[50%]">
          <div className="text-sm lg:text-xl text-center lg:text-left mt-3 opacity-[0.75] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, qui
            enim. Corrupti iusto at ab exercitationem numquam voluptas quasi id!
            Magni reprehenderit odit facere, suscipit debitis, provident fugiat
            quis veritatis nobis harum explicabo ratione facilis atque
            voluptatum quam cumque eius autem cum id veniam. Vel porro soluta
            debitis ducimus nulla. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ullam saepe earum enim cumque error voluptas
            numquam repellat atque pariatur excepturi!
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center ">
            <div className="rounded-full overflow-hidden">
              <img
                src="/images/food/burger.png"
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

export default AboutUsSection2;
