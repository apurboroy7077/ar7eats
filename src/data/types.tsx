type userDataType = {
  name: string;
  email: string;
};
type reservationReceivedDataType = {
  date: string;
  time: string;
  numberOfSits: string;
  authToken: string;
};
type savedTablesData = {
  date: string;
  email: string;
  id: string;
  sits: string;
  time: string;
}[];
type savedSingleTableData = {
  date: string;
  email: string;
  id: string;
  sits: string;
  time: string;
};

type cartDataType = {
  id: string;
  amount: number;
}[];
type cartSingleItemDataType = {
  id: string;
  amount: number;
};
type confirmOrderDetailsDataType = {
  totalPrice: string;
  productsData: {
    name: string;
    description: string;
    rating: string;
    price: string;
    id: string;
    imageSrc: string;
    amount: string;
    totalPriceOfThisProduct: string;
  }[];
};
type ordersPlacedByUserType = {
  orderid: string;
  useremail: string;
  creationdate: string;
  ordereditem: string;
  totalprice: string;
}[];
type orderedItemsDataType = {
  id: string;
  name: string;
  description: string;
  rating: string;
  price: string;
  imagesrc: string;
  amount: string;
  totalPriceOfThisProduct: string;
}[];
type loginStatusType = "LOGGED_IN" | "NOT_LOGGED_IN";
type paginationDataType = {
  from: number;
  to: number;
};
type categoryNameType =
  | "Lunch"
  | "Dinner"
  | "Dessert"
  | "Drink"
  | "All Categories";

type foodDataType = {
  name: string;
  description: string;
  rating: string;
  price: string;
  id: string;
  imageSrc: string;
  category: categoryNameType;
};
export type {
  userDataType,
  reservationReceivedDataType,
  savedTablesData,
  foodDataType,
  savedSingleTableData,
  cartDataType,
  cartSingleItemDataType,
  confirmOrderDetailsDataType,
  loginStatusType,
  ordersPlacedByUserType,
  orderedItemsDataType,
  paginationDataType,
  categoryNameType,
};
