"use client";

import { UPLOAD_PRODUCT_API } from "@/data/Variables";
import axios from "axios";
import { useState } from "react";
type uploadStatusType = "STOPPED" | "UPLOADING" | "SUCCESSFUL" | "FAILED";
const UploadProductForm = () => {
  const [uploadStatus, setUploadStatus] = useState(
    "STOPPED" as uploadStatusType
  );
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataForServer = new FormData();
    setUploadStatus("UPLOADING");
    axios
      .post(UPLOAD_PRODUCT_API, formData)
      .then((response) => {
        console.log(response);
        setUploadStatus("SUCCESSFUL");
      })
      .catch((error) => {
        console.log(error);
        setUploadStatus("FAILED");
      });
  };
  const handleClickOnUploadAnotherItemButton = () => {
    setUploadStatus("STOPPED");
  };
  return (
    <>
      {(uploadStatus === "STOPPED" ||
        uploadStatus === "UPLOADING" ||
        uploadStatus === "FAILED") && (
        <form onSubmit={handleUpload}>
          <div className="text-center font-bold md:text-2xl lg:text-4xl">
            Checkout
          </div>
          <div className="my-2 md:my-3">
            <div className="text-sm md:text-base font-medium mb-1 md:mb-2">
              Shipping Address
            </div>
            <div className=" flex items-center gap-2">
              <div className="w-[75%] ">
                <input
                  required
                  type="file"
                  name="image"
                  className="w-full text-sm md:text-base pt-1  h-[2.3rem] md:h-[2.5rem] px-2 border-[black] border-[1px] rounded"
                />
              </div>
              <div className="w-[25%]">
                <button className="w-full h-[1.7rem] md:h-[2.5rem] text-sm rounded bg-[#74A0E1] text-white active:scale-[0.95]">
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="my-2 md:my-3">
            <div className="text-sm md:text-base  font-medium mb-1 md:mb-2">
              Order Data
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
              <div className="">
                <input
                  required
                  className="w-full text-sm md:text-base h-[1.7rem] md:h-[2.5rem] px-2 border-[black] border-[1px] rounded"
                  placeholder="Item Name"
                  name="name"
                />
              </div>
              <div className="">
                <input
                  required
                  className="w-full text-sm md:text-base h-[1.7rem] md:h-[2.5rem] px-2 border-[black] border-[1px] rounded"
                  placeholder="Price"
                  name="price"
                  type="number"
                />
              </div>
              <div className="">
                <input
                  required
                  className="w-full text-sm md:text-base h-[1.7rem] md:h-[2.5rem] px-2 border-[black] border-[1px] rounded"
                  placeholder="Made In"
                  name="made-in"
                />
              </div>
              <div className="">
                <input
                  required
                  className="w-full text-sm md:text-base h-[1.7rem] md:h-[2.5rem] px-2 border-[black] border-[1px] rounded"
                  placeholder="Company Name"
                  name="company-name"
                />
              </div>
            </div>
          </div>
          <div className="my-2 md:my-5">
            <div>
              <textarea
                required
                className="w-full text-sm md:text-base h-[4rem] md:h-[6rem] px-2 border-[black] border-[1px] rounded"
                placeholder="Description"
                name="description"
              />
            </div>
          </div>
          <div className="my-2">
            <div className="text-sm font-medium mb-1 md:text-base">
              Select Category
            </div>
            <div className="mt-2 md:text-lg grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="">
                <span>
                  <input
                    required
                    className="md:w-[1rem] md:h-[1rem]"
                    type="radio"
                    name="category"
                    value="Lunch"
                  />
                </span>
                <span className="ml-2 ">Lunch</span>
              </div>
              <div>
                <span>
                  <input
                    required
                    className="md:w-[1rem] md:h-[1rem]"
                    type="radio"
                    name="category"
                    value="Dinner"
                  />
                </span>
                <span className="ml-2">Dinner</span>
              </div>
              <div>
                <span>
                  <input
                    required
                    className="md:w-[1rem] md:h-[1rem]"
                    type="radio"
                    name="category"
                    value="Dessert"
                  />
                </span>
                <span className="ml-2">Dessert</span>
              </div>
              <div>
                <span>
                  <input
                    required
                    className="md:w-[1rem] md:h-[1rem]"
                    type="radio"
                    name="category"
                    value="Drink"
                  />
                </span>
                <span className="ml-2">Drink</span>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-9 mb-3">
            <div>
              {uploadStatus === "STOPPED" && (
                <button
                  type="submit"
                  className="bg-[#F54748] md:text-lg font-medium w-full text-white py-1 md:py-3 rounded-lg active:scale-[0.95]"
                >
                  Upload Item
                </button>
              )}
              {uploadStatus === "UPLOADING" && (
                <button className="bg-[#F54748] md:text-lg font-medium w-full text-white py-1 md:py-3 rounded-lg active:scale-[0.95]">
                  Uploading{" "}
                  <img
                    className="ml-1 animate-spin inline w-[1.5rem]"
                    src="/images/icons/spinner-2.png"
                    alt=""
                  />
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {uploadStatus === "SUCCESSFUL" && (
        <div>
          <div className="text-center mt-[10rem]">
            <button className="border-[2px] border-[black] px-5 py-2 rounded-lg">
              Uploaded Successfully{" "}
              <img
                className=" inline w-[2rem] ml-3"
                src="/images/icons/checked.png"
                alt=""
              />
            </button>{" "}
            <br />
            <button
              className="border-[2px] bg-[#F54748] text-white border-[black] px-5 py-2 rounded-lg mt-5"
              onClick={handleClickOnUploadAnotherItemButton}
            >
              Upload Another Item{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadProductForm;

// axios
//   .post(UPLOAD_PRODUCT_API, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
