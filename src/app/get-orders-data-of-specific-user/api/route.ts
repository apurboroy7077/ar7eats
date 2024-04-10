import { JWT_SECRET_KEY } from "@/data/Variables";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();
    const { authToken } = receivedData;
    const userData = jwt.verify(authToken, JWT_SECRET_KEY);
    const userEmail = userData.email;
    const databaseInfo = await myPool.query(
      "SELECT * FROM orders WHERE useremail=$1",
      [userEmail]
    );
    const ordersOfThisUser = databaseInfo.rows;
    console.log(ordersOfThisUser);
    return Response.json(
      { data: ordersOfThisUser, message: "Data Fetch Successful." },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
