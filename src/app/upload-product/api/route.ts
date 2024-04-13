import { myPool } from "@/utils/PostgresqlConfiguration";
import { existsSync, mkdirSync, writeFile } from "fs";
import { join } from "path";

const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name");
    const price = formData.get("price");
    const madeIn = formData.get("made-in");
    const companyName = formData.get("company-name");
    const description = formData.get("description");
    const category = formData.get("category");
    const imageFile: any = formData.get("image");
    const imageBytes = await imageFile!.arrayBuffer();
    const imageBuffer = Buffer.from(imageBytes);
    const directory = "public/images/food";
    const fileName = imageFile!.name;
    const filePath = join(directory, fileName);
    const rating = Math.floor(Math.random() * 6);
    const id = Math.random().toString();

    if (!existsSync(directory)) {
      mkdirSync(directory);
      9;
    }
    const imageSrc = `/images/food/${fileName}`;
    console.log(name, price, rating, description, id, category, imageSrc);
    await myPool
      .query(
        "INSERT INTO fooddata(name, price, rating, description, id, category, imageSrc) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [name, price, rating, description, id, category, imageSrc]
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });

    await writeFile(filePath, imageBuffer, (error) => {
      console.log(error);
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
