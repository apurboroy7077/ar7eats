import { myPool } from "@/utils/PostgresqlConfiguration";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();
    const databaseInfo = await myPool.query(
      "SELECT COUNT(*) AS total_rows FROM fooddata"
    );
    const totalNumber = Number(databaseInfo.rows[0].total_rows);
    return Response.json(
      { message: "Fetching Successful.", data: totalNumber },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
