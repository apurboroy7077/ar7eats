import foodData from "@/data/foodData";
import { myPool } from "@/utils/PostgresqlConfiguration";
import WaitingFunction from "@/utils/WaitFunction";

const POST = async (req: Request) => {
  try {
    await WaitingFunction(2);
    const receivedData = await req.json();
    const { id } = receivedData;
    const databaseInfo = await myPool.query(
      "SELECT * FROM fooddata WHERE id=$1",
      [id]
    );
    const matchedItems = databaseInfo.rows;
    if (matchedItems.length < 1) {
      return Response.json(
        { message: "Data not found with this food id." },
        { status: 404 }
      );
    } else {
      const result = matchedItems[0];
      return Response.json({ data: result }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
