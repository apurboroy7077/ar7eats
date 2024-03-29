import React from "react";
import { myPool } from "./PostgresqlConfiguration";

const GiveUserWithSameEmail = async (email: string, theResponse: Response) => {
  return new Promise((resolve, reject) => {
    myPool
      .query("SELECT * FROM userdata WHERE email=$1", [email])
      .then((response: any) => {
        console.log(response.rows);
      })
      .catch((error: any) => {
        console.log(error);
      });
  });
};

export default GiveUserWithSameEmail;
