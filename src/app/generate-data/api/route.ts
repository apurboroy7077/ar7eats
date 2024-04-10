import { foodDataType } from "@/data/types";
import { myPool } from "@/utils/PostgresqlConfiguration";
import { faker } from "@faker-js/faker";
import { resolve } from "path";

const POST = async (req: Request) => {
  try {
    const receivedData = await req.json();

    const generatedFoodData = [] as foodDataType[];
    for (let i = 0; i < 10; i++) {
      const foodData = {} as foodDataType;
      foodData.name = faker.animal.fish();
      foodData.id = Math.random().toString();
      foodData.imageSrc = faker.image.url();
      foodData.price = (Math.random() * 100).toFixed(2);
      foodData.rating = (Math.random() * 5).toFixed(1);
      foodData.description = faker.lorem.paragraph();
      generatedFoodData.push(foodData);
    }

    await new Promise((resolve, reject) => {
      let successNumbers = 0;
      for (let i = 0; i < generatedFoodData.length; i++) {
        const singleData = generatedFoodData[i];
        const { id, name, description, rating, price, imageSrc } = singleData;
        myPool
          .query(
            "INSERT INTO fooddata(id, name, description, rating, price, imagesrc) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [id, name, description, rating, price, imageSrc]
          )
          .then((response: any) => {
            console.log(response.rows);
            successNumbers++;
            if (successNumbers === generatedFoodData.length - 1) {
              resolve("Mission Successful");
            }
          })
          .catch((error: any) => {
            console.log(error.message);
            reject("Mission Failed");
          });
      }
    });

    return Response.json(
      { message: "Reservation Successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
