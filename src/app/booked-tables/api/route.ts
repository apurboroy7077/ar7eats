import { JWT_SECRET_KEY } from "@/data/Variables";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();
    const { authToken } = receivedData;
    const userData = jwt.verify(authToken, JWT_SECRET_KEY);
    const { email } = userData;
    const savedTablesData = await myPool.query(
      "SELECT * FROM reservations WHERE email=$1",
      [email]
    );
    const savedTables = savedTablesData.rows;

    return Response.json(
      { message: "Reservation Successful", data: savedTables },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
