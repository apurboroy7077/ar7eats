import { MY_ORDERS_ADDRESS } from "./Variables";

const linkData = [
  {
    title: "Home",
    hrefValue: "/",
  },
  {
    title: "Menu",
    hrefValue: "/menu",
  },
  {
    title: "Cart",
    hrefValue: "/cart",
  },
  {
    title: "About Us",
    hrefValue: "/about-us",
  },
  {
    title: "Upload Own Item",
    hrefValue: "/upload-product",
  },
  {
    title: "My Orders",
    hrefValue: MY_ORDERS_ADDRESS,
  },
  {
    title: "Reservation",
    hrefValue: "/reservation",
  },
  {
    title: "Sign In",
    hrefValue: "/sign-in",
  },
];
type linkDataType = typeof linkData;
export default linkData;
export type { linkDataType };
