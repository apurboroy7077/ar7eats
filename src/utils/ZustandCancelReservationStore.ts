import { create } from "zustand";

const useCancelReservation = create((set) => ({
  popupStatus: "CLOSED",
  reservationDetails: {
    id: "",
    email: "",
    date: "",
    time: "",
    sits: "",
  },
  openPopup: () => {
    set(() => ({ popupStatus: "OPENED" }));
  },
  closePopup: () => {
    set(() => ({ popupStatus: "CLOSED" }));
  },
  setReservationDetails: (data: any) => {
    set(() => ({ reservationDetails: data }));
  },
}));
type useCancelReservationStateType = {
  popupStatus: "CLOSED" | "OPENED";
  openPopup: Function;
  closePopup: Function;
};
export { useCancelReservation };
export type { useCancelReservationStateType };
