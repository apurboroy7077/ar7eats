import CheckUserWithSameEmailExists from "@/utils/CheckUserWithSameEmailExists";
import { hashMyPassword } from "@/utils/PasswordHashing";
import { myPool } from "@/utils/PostgresqlConfiguration";
import SaveUserToDatabase from "@/utils/SaveUserToDatabase";
import WaitingFunction from "@/utils/WaitFunction";

let POST = async (request: Request) => {
  try {
    let receivedData = await request.json();
    let { name, email, password } = receivedData;
    email = email.toLowerCase();
    console.log(email);
    let isUserExists = await CheckUserWithSameEmailExists(email);
    if (isUserExists) {
      return Response.json(
        {
          message: "Users with Same email Already Exists.",
        },
        { status: 409 }
      );
    }
    let hashedPassword = (await hashMyPassword(password)) as string;
    await WaitingFunction(2);
    SaveUserToDatabase(email, name, hashedPassword);
    return Response.json(
      { message: "Sign Up Successful, Please Log In." },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
};

export { POST };
