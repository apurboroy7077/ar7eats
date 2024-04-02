const SIGN_UP_API = "/sign-up/api";
const SIGN_IN_PAGE_ADDRESS = "/sign-in";
const SIGN_IN_API = "/sign-in/api";
const JWT_SECRET_KEY = "ar7eats-grilled-chicken";
const LOCALSTORAGE_AUTHTOKEN_KEYNAME = "ar7eats-authtoken";
const GET_USER_INFO_API = "/get-user-info/api";
const LOCALSTORAGE_USERDATA_KEYNAME = "ar7eats-locally-saved-userdata";
const BOOK_RESERVATION_API = "/reservation/book/api";
const GET_BOOKED_TABLE_DATA_API = "/booked-tables/api";
const CANCEL_RESERVATION_API = "/reservation/cancel/api";
const CART_PAGE_LINK = "/cart";
const CARTDATA_KEYNAME_IN_LOCALSTORAGE = "ar7eats-cart-data";
const GET_FOOD_DATA_API = "/get-food-data/api";
const CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE = (id: string) => {
  return `ar7eats-cart-data-of-${id}`;
};

export {
  SIGN_UP_API,
  SIGN_IN_PAGE_ADDRESS,
  SIGN_IN_API,
  JWT_SECRET_KEY,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  GET_USER_INFO_API,
  LOCALSTORAGE_USERDATA_KEYNAME,
  BOOK_RESERVATION_API,
  GET_BOOKED_TABLE_DATA_API,
  CANCEL_RESERVATION_API,
  CART_PAGE_LINK,
  CARTDATA_KEYNAME_IN_LOCALSTORAGE,
  GET_FOOD_DATA_API,
  CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE,
};
