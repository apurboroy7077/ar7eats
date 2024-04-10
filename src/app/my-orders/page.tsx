import MyOrdersContent from "@/components/MyOrdersContent";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="max-w-[100rem]">
          <div className="my-3 md:my-7 lg:my-10">
            <div className="text-center font-bold md:text-xl lg:text-3xl">
              My Orders
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center w-full">
              <MyOrdersContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
