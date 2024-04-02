import {
  CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE,
  GET_FOOD_DATA_API,
} from "@/data/Variables";
import {
  cartDataType,
  cartSingleItemDataType,
  foodDataType,
} from "@/data/types";
import GenerateStars from "@/utils/GenerateStars";
import useCart from "@/utils/ZustandCart";
import axios from "axios";
import { useEffect, useState } from "react";
type propsType = {
  productData: cartSingleItemDataType;
};
type foodStateDataType = null | foodDataType;
type fetchingStatusType = "LOADING" | "STOPPED" | "LOADED";
const CartListItem = (props: propsType) => {
  const [fetchingStatus, setFetchingStatus] = useState(
    "STOPPED" as fetchingStatusType
  );
  const { productData } = props;
  const [foodData, setFoodData] = useState(null as foodStateDataType);
  const { id } = productData;
  let amount = 0;
  const increaseAmount = useCart((state: any) => state.increaseAmount);
  const decreaseAmount = useCart((state: any) => state.decreaseAmount);
  const deleteFromCart = useCart((state: any) => state.deleteFromCart);
  const cartData: cartDataType = useCart((state: any) => state.cartData);
  for (let i = 0; i < cartData.length; i++) {
    let data = cartData[i];
    if (data.id === id) {
      amount = data.amount;
    }
  }

  useEffect(() => {
    let savedCartData = localStorage.getItem(
      CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE(id)
    );
    if (savedCartData) {
      setFetchingStatus("LOADED");
      let processedSavedCartData = JSON.parse(savedCartData);
      setFoodData(processedSavedCartData);
      axios
        .post(GET_FOOD_DATA_API, { id })
        .then((response) => {
          const receivedData = response.data.data;
          setFoodData(receivedData);
          localStorage.setItem(
            CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE(id),
            JSON.stringify(receivedData)
          );
        })
        .catch((error) => {
          setFetchingStatus("STOPPED");
          console.log(error);
        });
    }
    if (!savedCartData) {
      setFetchingStatus("LOADING");
      axios
        .post(GET_FOOD_DATA_API, { id })
        .then((response) => {
          setFetchingStatus("LOADED");
          const receivedData = response.data.data;
          setFoodData(receivedData);
          localStorage.setItem(
            CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE(id),
            JSON.stringify(receivedData)
          );
        })
        .catch((error) => {
          setFetchingStatus("STOPPED");
          console.log(error);
        });
    }
  }, []);
  const handleAmountIncrease = () => {
    increaseAmount(id);
  };
  const handleAmountDecrease = () => {
    decreaseAmount(id);
  };
  const handleDeleteFromCart = () => {
    deleteFromCart(id);
  };
  return (
    <>
      <li>
        <div className="flex gap-3 justify-between items-center">
          {fetchingStatus === "LOADED" && (
            <>
              <div>
                <img
                  className="w-[11rem] md:w-[15rem] h-[8rem] md:h-[10rem] object-cover  rounded"
                  src={"/images/food/burger.png"}
                  alt=""
                />
              </div>
              <div className=" w-[40%] flex items-center justify-center">
                <div className="flex flex-col gap-1">
                  <div className="text-xs md:text-2xl  font-medium">
                    {foodData?.name}
                  </div>
                  {foodData && (
                    <div className="flex">
                      <GenerateStars
                        rating={foodData.rating}
                        classes="w-[0.8rem] md:w-[1.3rem]"
                      />
                    </div>
                  )}
                  <div className="text-[0.5rem] md:text-base opacity-[0.6] font-medium">
                    {foodData?.description}
                  </div>
                  <div>
                    <button
                      className=" w-[3.5rem] lg:w-[8rem] text-xs font-medium bg-[#F54748] text-white px-1 py-1 rounded lg:text-xl active:scale-[0.95]"
                      onClick={handleDeleteFromCart}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-1 md:gap-3">
                  <div className="text-sm md:text-xl  text-[#3AB574] font-bold">
                    {(Number(foodData?.price) * Number(amount)).toFixed(2)}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <img
                        className="w-[1rem]"
                        src="/images/icons/arrow-up.svg"
                        alt=""
                        onClick={handleAmountDecrease}
                      />
                    </div>
                    <div>
                      <input
                        className="border-[black] font-bold text-sm md:text-lg rounded-md text-center border-[2px] h-[1.5rem] w-[2rem]"
                        type="text"
                        value={amount}
                      />
                    </div>
                    <div>
                      <img
                        className="w-[1rem]"
                        src="/images/icons/arrow-down.svg"
                        alt=""
                        onClick={handleAmountIncrease}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {fetchingStatus === "LOADING" && (
            <button
              type="submit"
              className="border-[black] border-[1px] w-full rounded px-2 py-1 md:py-3  bg-[#F54748] text-[white] font-bold active:scale-[0.95]"
            >
              Loading{" "}
              <img
                src="/images/icons/spinner-2.png"
                className=" inline w-[1.5rem] animate-spin"
                alt=""
              />
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default CartListItem;
