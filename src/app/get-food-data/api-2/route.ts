import { myPool } from "@/utils/PostgresqlConfiguration";
import WaitingFunction from "@/utils/WaitFunction";

const POST = async (req: Request) => {
  try {
    await WaitingFunction(3);

    const receivedData = await req.json();
    const cartData = receivedData.cartData;
    const arrayOfProductId = [];
    for (let i = 0; i < cartData.length; i++) {
      let data = cartData[i];
      let id = data.id;
      arrayOfProductId.push(id);
    }

    const databaseInfo = await myPool.query(
      "SELECT * FROM fooddata WHERE id = ANY($1)",
      [arrayOfProductId]
    );
    const productData = databaseInfo.rows;
    let totalPrice = 0;
    for (let i = 0; i < productData.length; i++) {
      let data = productData[i];
      for (let i = 0; i < cartData.length; i++) {
        let cartSingleData = cartData[i];
        if (data.id === cartSingleData.id) {
          let amount = Number(cartSingleData.amount);
          let price = Number(data.price);
          let totalPriceOfThisProduct = amount * price;
          totalPrice = totalPrice + totalPriceOfThisProduct;
          data.amount = amount;
          data.totalPriceOfThisProduct = totalPriceOfThisProduct;
        }
      }
    }
    const dataForClient = {
      totalPrice: totalPrice,
      productsData: productData,
    };
    return Response.json(
      { message: "Fetching Successful", dataForClient },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
