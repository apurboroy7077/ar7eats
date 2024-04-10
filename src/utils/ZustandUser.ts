import {
  GET_USER_INFO_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
} from "@/data/Variables";
import { loginStatusType, ordersPlacedByUserType } from "@/data/types";
import axios from "axios";
import { create } from "zustand";
type useUserType = {
  loginStatus: loginStatusType;
  email: string;
  name: string;
  login: (email: string, name: string) => void;
  loginByAuthToken: () => void;
  ordersPlacedByUser: ordersPlacedByUserType;
  setOrdersPlacedByUser: (data: ordersPlacedByUserType) => void;
  logout: () => void;
};
const useUser = create<useUserType>((set) => {
  return {
    loginStatus: "NOT_LOGGED_IN" as loginStatusType,
    email: "",
    name: "",
    ordersPlacedByUser: [] as ordersPlacedByUserType,
    login: (email, name) => {
      set((state) => {
        return {
          ...state,
          loginStatus: "LOGGED_IN",
          email: email,
          name: name,
        };
      });
    },
    loginByAuthToken: () => {
      const authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
      if (authToken) {
        const headers = {
          Authorization: authToken,
        };
        axios
          .get(GET_USER_INFO_API, { headers })
          .then((response) => {
            const userData = response.data.userData;
            const userEmail = userData.email;
            const userName = userData.name;
            set((state) => {
              return {
                ...state,
                email: userEmail,
                name: userName,
                loginStatus: "LOGGED_IN",
              };
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    setOrdersPlacedByUser: (data: ordersPlacedByUserType) => {
      set((state) => {
        return { ...state, ordersPlacedByUser: data };
      });
    },
    logout: () => {
      set((state) => {
        localStorage.removeItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
        return {
          ...state,
          loginStatus: "NOT_LOGGED_IN",
          email: "",
          name: "",
          ordersPlacedByUser: [],
        };
      });
    },
  };
});

export default useUser;
export type { useUserType };
