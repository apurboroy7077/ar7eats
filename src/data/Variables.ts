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
const GET_FOOD_DATA_API_2 = "/get-food-data/api-2";
const GET_FOOD_DATA_API_3 = "/get-food-data/api-3";
const MY_ORDERS_ADDRESS = "/my-orders";
const CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE = (id: string) => {
  return `ar7eats-cart-data-of-${id}`;
};
const CONFIRM_ORDER_API = "/confirm-order/api";
const GET_ORDERS_DATA_OF_SPECIFIC_USER_API =
  "/get-orders-data-of-specific-user/api";
const LOGOUT_ADDRESS = "/log-out";
const RESERVATION_ADDRESS = "/reservation";
const MENU_ADDRESS = "/menu";
const GENERATE_DATA_API = "/generate-data/api";
const GET_TOTAL_NUMBER_OF_FOOD_IN_DATABASE_API =
  "/get-food-data/get_number_of_total_food/api";
const UPDATE_DATABASE_API_1 = "/admin/update_database_1/api";
const GET_FOOD_DATA_BASED_ON_CATEGORY_API =
  "/get-food-data/get-food-data-based-on-category/api";
const UPLOAD_PRODUCT_API = "/upload-product/api";
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
  GET_FOOD_DATA_API_2,
  CARTDATA_SINGLE_ITEM_DATA_KEYNAME_IN_LOCALSTORAGE,
  CONFIRM_ORDER_API,
  MY_ORDERS_ADDRESS,
  GET_ORDERS_DATA_OF_SPECIFIC_USER_API,
  LOGOUT_ADDRESS,
  RESERVATION_ADDRESS,
  MENU_ADDRESS,
  GET_FOOD_DATA_API_3,
  GENERATE_DATA_API,
  GET_TOTAL_NUMBER_OF_FOOD_IN_DATABASE_API,
  UPDATE_DATABASE_API_1,
  GET_FOOD_DATA_BASED_ON_CATEGORY_API,
  UPLOAD_PRODUCT_API,
};
