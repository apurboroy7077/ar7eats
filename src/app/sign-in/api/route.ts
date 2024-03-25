import { JWT_SECRET_KEY } from "@/data/Variables";
import CheckPasswordCorrectionFromDatabase from "@/utils/CheckPasswordCorrectionFromDatabase";
import CheckUserWithSameEmailExists from "@/utils/CheckUserWithSameEmailExists";
import jwt from "@/utils/JWT";
import { checkPassword, hashMyPassword } from "@/utils/PasswordHashing";
import { myPool } from "@/utils/PostgresqlConfiguration";
import SaveUserToDatabase from "@/utils/SaveUserToDatabase";
import WaitingFunction from "@/utils/WaitFunction";

let POST = async (request: Request) => {
  try {
    await WaitingFunction(2);
    let receivedData = await request.json();

    let { email, password } = receivedData;

    let isUserExists = await CheckUserWithSameEmailExists(email);
    if (!isUserExists) {
      return Response.json(
        {
          message: "User this Email Does not Exists.",
        },
        { status: 404 }
      );
    }
    let isPasswordCorrect = (await CheckPasswordCorrectionFromDatabase(
      email,
      password
    )) as boolean;
    if (isPasswordCorrect === false) {
      return Response.json(
        {
          message: "Password Incorrect",
        },
        { status: 401 }
      );
    }
    let authToken = await jwt.sign({ email }, JWT_SECRET_KEY);
    console.log(authToken);
    return Response.json(
      { message: "Sign In Successful", authToken },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
};

export { POST };
