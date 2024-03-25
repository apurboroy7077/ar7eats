import { myPool } from "./PostgresqlConfiguration";

const SaveUserToDatabase = (
  email: string,
  name: string,
  hashedPassword: string
) => {
  return new Promise((resolve, reject) => {
    myPool
      .query(
        "INSERT INTO userdata(email, name, password) VALUES ($1, $2, $3) RETURNING *",
        [email, name, hashedPassword]
      )
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export default SaveUserToDatabase;
