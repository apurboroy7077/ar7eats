"use client";
import { cartDataType, foodDataType } from "@/data/types";
import GenerateStars from "@/utils/GenerateStars";
import useCart from "@/utils/ZustandCart";
type propsType = {
  data: {
    name: string;
    description: string;
    rating: string;
    price: string;
    id: string;
    imageSrc: string;
  };
};
const FoodListItem = (props: propsType) => {
  const { data } = props;
  console.log(data);
  const { name, imageSrc, description, rating, id } = data;
  const addToCart = useCart((state: any) => state.addToCart);
  const cartData: cartDataType = useCart((state: any) => state.cartData);
  let existsInCartStatus = "DOES_NOT_EXISTS";
  for (let i = 0; i < cartData.length; i++) {
    let data = cartData[i];
    if (data.id === id) {
      existsInCartStatus = "EXISTS";
    }
  }

  const handleOrder = () => {
    addToCart(id);
  };

  return (
    <li key={Math.random()} className="text-center">
      <div>
        <img src={imageSrc} alt={name} />
      </div>
      <div className="text-sm md:text-lg font-medium ">{name}</div>
      <div className=" mt-1 text-[0.6rem]  md:text-sm  opacity-[0.6]">
        {description}
      </div>
      <div className="flex justify-center mt-1 md:mt-3">
        <GenerateStars rating={rating} classes={"w-[1rem] md:w-[1.3rem]"} />
      </div>
      <div className="flex gap-2 md:gap-4 items-center justify-center mt-2 md:mt-4">
        <div className="font-medium text-sm md:text-lg">$12.05</div>
        <div>
          {existsInCartStatus === "DOES_NOT_EXISTS" && (
            <button
              onClick={handleOrder}
              className="text-xs md:text-sm font-medium rounded bg-[#F54748] text-white px-2 py-1 active:scale-[0.95]"
            >
              Add to Cart
            </button>
          )}
          {existsInCartStatus === "EXISTS" && (
            <button className="text-xs md:text-sm font-medium rounded border-[2px] border-black px-2 py-1 active:scale-[0.95]">
              Added to Cart{" "}
              <img
                className="inline ml-1 w-[1.2rem]"
                src="/images/icons/checked.png"
                alt=""
              />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default FoodListItem;
