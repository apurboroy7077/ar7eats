import { JWT_SECRET_KEY } from "@/data/Variables";
import { reservationReceivedDataType } from "@/data/types";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";
import WaitingFunction from "@/utils/WaitFunction";

const POST = async (req: Request) => {
  try {
    const receivedData = (await req.json()) as reservationReceivedDataType;
    const { date, time, numberOfSits, authToken } = receivedData;
    const userData = jwt.verify(authToken, JWT_SECRET_KEY);
    await WaitingFunction(2);
    if (!(date && time && numberOfSits)) {
      return Response.json(
        { message: "Please Enter All the Value" },
        { status: 400 }
      );
    }
    const id = Math.random().toString();
    const { email } = userData;
    await myPool.query(
      "INSERT INTO reservations(id,email,date,time,sits) VALUES ($1, $2, $3, $4, $5)",
      [id, email, date, time, numberOfSits]
    );
    return Response.json(
      { message: "Reservation Successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: error.message }, { status: 503 });
  }
};
export { POST };
