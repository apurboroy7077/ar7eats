import React from "react";
import { myPool } from "./PostgresqlConfiguration";
import { checkPassword } from "./PasswordHashing";

const CheckPasswordCorrectionFromDatabase = async (
  email: string,
  plainPassword: string
) => {
  return new Promise((resolve, reject) => {
    myPool
      .query("SELECT * FROM userdata WHERE email=$1", [email])
      .then((response: any) => {
        let hashedPassword = response.rows[0].password;
        checkPassword(plainPassword, hashedPassword)
          .then((response) => {
            resolve(response);
          })
          .catch((error: any) => {
            reject(error);
          });
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export default CheckPasswordCorrectionFromDatabase;
