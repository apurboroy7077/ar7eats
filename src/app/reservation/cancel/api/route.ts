import { JWT_SECRET_KEY } from "@/data/Variables";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();
    const { id, authToken } = receivedData;
    const userData = jwt.verify(authToken, JWT_SECRET_KEY);
    const { email } = userData;
    console.log(email, id);
    await myPool.query("DELETE FROM reservations WHERE id=$1 AND email=$2", [
      id,
      email,
    ]);
    return Response.json({ message: "Deleted Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
