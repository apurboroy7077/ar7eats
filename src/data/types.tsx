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
  imageSrc: string;
  description: string;
  rating: string;
  id: string;
};
export type {
  userDataType,
  reservationReceivedDataType,
  savedTablesData,
  foodDataType,
  savedSingleTableData,
};
