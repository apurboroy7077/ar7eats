"use client";
import React, { useEffect } from "react";
import {
  GET_USER_INFO_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  LOCALSTORAGE_USERDATA_KEYNAME,
} from "@/data/Variables";
import axios from "axios";
import useCart from "@/utils/ZustandCart";
import useUser from "@/utils/ZustandUser";
import useProduct from "@/utils/ZustandProduct";

const BasicApiCalls = () => {
  const login = useUser((state) => state.login);
  const cartData = useCart((state: any) => state.cartData);
  const loadCartData = useCart((state: any) => state.loadCartData);
  const loadDataOfSavedCartItems = useCart(
    (state: any) => state.loadDataOfSavedCartItems
  );
  const loadDataAccordingPagination = useProduct(
    (state) => state.loadDataAccordingPagination
  );
  const setTotalNumberOfProductsInDatabase = useProduct(
    (state) => state.setTotalNumberOfProductsInDatabase
  );
  // LOAD CART DATA ON RELOAD ---------------------------------------------------------------------------------
  useEffect(() => {
    loadCartData();
    loadDataOfSavedCartItems();
  }, []);
  // Authenticate---------------------------------------------------------------------------------------------------------

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
          const { email, name } = userData;
          login(email, name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // loadProductsData---------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    setTotalNumberOfProductsInDatabase();
    loadDataAccordingPagination({ from: 0, to: 20 });
  }, []);
  return <></>;
};

export default BasicApiCalls;
