import React from "react";
import { myPool } from "./PostgresqlConfiguration";

const CheckUserWithSameEmailExists = async (email: string) => {
  return new Promise((resolve, reject) => {
    myPool
      .query("SELECT * FROM userdata WHERE email=$1", [email])
      .then((response: any) => {
        if (response.rows.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export default CheckUserWithSameEmailExists;
