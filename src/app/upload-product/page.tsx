import UploadProductForm from "@/components/UploadProductForm";
import React from "react";

const page = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="flex justify-center align-center">
        <div className="bg-[#FFFFFF] mx-2 my-5 p-2 md:p-7 w-full max-w-[55rem] rounded">
          <UploadProductForm />
        </div>
      </div>
    </section>
  );
};

export default page;
