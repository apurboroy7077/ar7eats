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
    const directory = "write-file-test";
    const fileName = imageFile!.name;

    const filePath = join(directory, fileName);
    if (!existsSync(directory)) {
      mkdirSync(directory);
      9;
    }
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
