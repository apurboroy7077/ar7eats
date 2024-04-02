import foodData from "@/data/foodData";
import WaitingFunction from "@/utils/WaitFunction";

const POST = async (req: Request) => {
  try {
    await WaitingFunction(2);
    const receivedData = await req.json();
    const { id } = receivedData;

    for (let i = 0; i < foodData.length; i++) {
      let data = foodData[i];
      if (data.id === id) {
        return Response.json({ data: data }, { status: 200 });
      }
    }
    return Response.json(
      { message: "Data not found with this food id." },
      { status: 404 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
