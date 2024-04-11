import { categoryNameType } from "@/data/types";
import { myPool } from "@/utils/PostgresqlConfiguration";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();

    const categoryName = receivedData.categoryName as categoryNameType;
    let databaseInfo;
    if (categoryName === "All Categories") {
      databaseInfo = await myPool.query(`SELECT * FROM fooddata LIMIT 20`);
    } else {
      databaseInfo = await myPool.query(
        `SELECT * FROM fooddata WHERE category=$1 LIMIT 20`,
        [categoryName]
      );
    }

    const data = databaseInfo.rows;
    for (let i = 0; i < data.length; i++) {
      let singleData = data[i];
      singleData.imageSrc = singleData.imagesrc;
      delete singleData.imagesrc;
    }
    return Response.json(
      { message: "Fetch Successful", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
