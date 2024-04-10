import {
  foodDataType,
  orderedItemsDataType,
  ordersPlacedByUserType,
} from "@/data/types";
import { useState } from "react";
type showDetailsStatusType = "HIDDEN" | "VISIBLE";
type propsType = {
  data: ordersPlacedByUserType[number];
};
const MyOrdersTableRows = (props: propsType) => {
  const ordersData = props.data;
  const { ordereditem, totalprice } = ordersData;
  const processedOrderedItems: orderedItemsDataType = JSON.parse(ordereditem);

  const [showDetailsStatus, setShowDetailsStatus] = useState(
    "HIDDEN" as showDetailsStatusType
  );
  const handleClickOnShowMore = () => {
    setShowDetailsStatus("VISIBLE");
  };
  const handleClickOnShowLess = () => {
    setShowDetailsStatus("HIDDEN");
  };
  return (
    <>
      <tr>
        <td className=" border w-[25%] max-w-[25%] text-wrap  p-2 md:py-5">
          {Math.random()}
        </td>
        <td className="border w-[25%] max-w-[25%] p-2 md:py-5">02/12/2024</td>
        <td className="border w-[25%] max-w-[25%] p-2 md:py-5">
          <button className="bg-[#FF9B00] px-1 md:px-3 py-1 rounded font-bold text-[white]">
            Pending
          </button>
        </td>
        <td className="border w-[25%] max-w-[25%] p-2 md:py-5">
          {showDetailsStatus === "HIDDEN" && (
            <button
              onClick={handleClickOnShowMore}
              className=" active:scale-[0.95] bg-[#2BB673] px-1 md:px-3 py-1 rounded font-bold text-[white]"
            >
              Show More
            </button>
          )}
          {showDetailsStatus === "VISIBLE" && (
            <button
              onClick={handleClickOnShowLess}
              className=" active:scale-[0.95] bg-[#2BB673] px-1 md:px-3 py-1 rounded font-bold text-[white]"
            >
              Show Less
            </button>
          )}
        </td>
      </tr>
      {showDetailsStatus === "VISIBLE" && (
        <>
          <tr>
            <td colSpan={4} className="text-start">
              <ol className="p-3 flex gap-2 flex-col">
                <li className="flex justify-between text-center font-bold">
                  <div className="w-[25%] ">Name</div>
                  <div className="w-[25%] ">Price</div>
                  <div className="w-[25%] ">Quantity</div>
                  <div className="w-[25%] ">Subtotal</div>
                </li>
                {processedOrderedItems.map((data) => {
                  const {
                    name,
                    description,
                    id,
                    imagesrc,
                    price,
                    rating,
                    amount,
                    totalPriceOfThisProduct,
                  } = data;
                  return (
                    <li
                      key={Math.random()}
                      className="flex justify-between text-center"
                    >
                      <div className="w-[25%] ">{name}</div>
                      <div className="w-[25%] ">{price}</div>
                      <div className="w-[25%] ">{amount}</div>
                      <div className="w-[25%] ">
                        {Number(totalPriceOfThisProduct).toFixed(2)}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              {" "}
              <div className="text-base md:text-lg lg:text-2xl font-medium py-3">
                Total Price = {Number(totalprice).toFixed(2)}$
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default MyOrdersTableRows;
