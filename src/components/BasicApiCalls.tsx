"use client";
import React, { useEffect } from "react";
import {
  GET_USER_INFO_API,
  LOCALSTORAGE_AUTHTOKEN_KEYNAME,
  LOCALSTORAGE_USERDATA_KEYNAME,
} from "@/data/Variables";
import axios from "axios";

const BasicApiCalls = () => {
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
