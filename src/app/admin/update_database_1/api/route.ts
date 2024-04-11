import { myPool } from "@/utils/PostgresqlConfiguration";
import { writeFileSync, writeSync } from "fs";
import data from "@/fooddata.json";
import categoryData from "@/data/CategoryData";
const POST = async (req: Request) => {
  try {
    // const receivedData = await req.json();
    // for (let i = 0; i < data.length; i++) {
    //   let singleData: any = data[i];
    //   singleData.category =
    //     categoryData[Math.floor(Math.random() * categoryData.length)].name;
    // }

    // for (let i = 0; i < data.length; i++) {
    //   let singleData = data[i];

    //   const { id, name, description, rating, price, imagesrc, category } =
    //     singleData;
    //   await myPool
    //     .query(
    //       "INSERT INTO fooddata(id, name, description, rating, price, imagesrc, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    //       [id, name, description, rating, price, imagesrc, category]
    //     )
    //     .then((response: any) => {
    //       console.log(response.rows);
    //     })
    //     .catch((error: any) => {
    //       console.log(error.message);
    //     });
    // }
    return Response.json(
      { message: "Reservation Successful" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
