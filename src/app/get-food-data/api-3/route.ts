import { myPool } from "@/utils/PostgresqlConfiguration";
type receivedDataType = {
  data: {
    from: number;
    to: number;
  };
};
const POST = async (req: Request) => {
  try {
    const receivedData: receivedDataType = await req.json();

    const databaseInfo = await myPool.query(
      "SELECT * FROM fooddata OFFSET $1 LIMIT $2",
      [receivedData.data.from, 20]
    );
    const data = databaseInfo.rows;
    for (let i = 0; i < data.length; i++) {
      let singleData = data[i];
      singleData.imageSrc = singleData.imagesrc;
      delete singleData.imagesrc;
    }

    return Response.json(
      { message: "Fetching Successful", data: data },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
