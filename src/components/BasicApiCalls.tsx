"use client";
import React, { useEffect } from "react";
import {
  GET_USER_INFO_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  LOCALSTORAGE_USERDATA_KEYNAME,
} from "@/data/Variables";
import axios from "axios";
import useCart from "@/utils/ZustandCart";

const BasicApiCalls = () => {
  const cartData = useCart((state: any) => state.cartData);
  const loadCartData = useCart((state: any) => state.loadCartData);
  const loadDataOfSavedCartItems = useCart(
    (state: any) => state.loadDataOfSavedCartItems
  );
  // LOAD CART DATA ON RELOAD ---------------------------------------------------------------------------------
  useEffect(() => {
    loadCartData();
    loadDataOfSavedCartItems();
  }, []);

  useEffect(() => {
    let authToken = localStorage.getItem(LOCALSTORAGE_AUTHTOKEN_KEYNAME);
    if (authToken !== null) {
      let headers = {
        Authorization: authToken,
      };
      axios
        .get(GET_USER_INFO_API, { headers })
        .then((response) => {
          let userData = response.data.userData;
          let stringifiedData = JSON.stringify(userData);
          localStorage.setItem(LOCALSTORAGE_USERDATA_KEYNAME, stringifiedData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return <></>;
};

export default BasicApiCalls;
