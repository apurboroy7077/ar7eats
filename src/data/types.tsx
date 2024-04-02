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

type foodDataType = {
  name: string;
  description: string;
  rating: string;
  price: string;
  id: string;
  imageSrc: string;
};
type cartDataType = {
  id: string;
  amount: number;
}[];
type cartSingleItemDataType = {
  id: string;
  amount: number;
};
export type {
  userDataType,
  reservationReceivedDataType,
  savedTablesData,
  foodDataType,
  savedSingleTableData,
  cartDataType,
  cartSingleItemDataType,
};
