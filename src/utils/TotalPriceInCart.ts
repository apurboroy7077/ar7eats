import useCart from "./ZustandCart";

const useTotalPrice = () => {
  const dataOfSavedCartItems = useCart(
    (state: any) => state.dataOfSavedCartItems
  );
  const cartData = useCart((state: any) => state.cartData);
  let totalPrice = 0;
  for (let i = 0; i < dataOfSavedCartItems.length; i++) {
    let details = dataOfSavedCartItems[i];
    for (let i = 0; i < cartData.length; i++) {
      let cartItem = cartData[i];

      if (cartItem.id === details.id) {
        let amount = Number(cartItem.amount);
        let price = Number(details.price);
        totalPrice = totalPrice + Number(price) * Number(amount);
      }
    }
  }
  totalPrice = Number(totalPrice.toFixed(2));

  return totalPrice;
};
export default useTotalPrice;
