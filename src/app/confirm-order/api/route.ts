import { JWT_SECRET_KEY } from "@/data/Variables";
import foodData from "@/data/foodData";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";
import WaitingFunction from "@/utils/WaitFunction";
import getLatestDate from "@/utils/getLatestDate";

const POST = async (req: Request) => {
  try {
    await WaitingFunction(3);

    const receivedData = await req.json();
    const authToken = receivedData.authToken;
    const userData = jwt.verify(authToken, JWT_SECRET_KEY);

    const cartData = receivedData.cartData;
    const matchedProducts = [];
    const dataForClient = {
      orderedItem: [] as any,
      totalPrice: 0,
      orderId: Math.random().toString(),
      userEmail: userData.email,
    };
    for (let i = 0; i < cartData.length; i++) {
      let singleItem = cartData[i];
      const id = singleItem.id;
      const amount = singleItem.amount;
      const productDetails = await myPool.query(
        "SELECT * FROM foodData WHERE id=$1",
        [id]
      );

      matchedProducts.push(productDetails.rows[0]);
    }
    console.log(matchedProducts);
    let totalPrice = 0;
    for (let i = 0; i < matchedProducts.length; i++) {
      const product = matchedProducts[i];

      for (let i = 0; i < cartData.length; i++) {
        const cartSingleData = cartData[i];
        if (product.id === cartSingleData.id) {
          const { price } = product;
          const { amount } = cartSingleData;
          totalPrice = totalPrice + Number(price) * Number(amount);
          product.amount = amount;
          product.totalPriceOfThisProduct = Number(price) * Number(amount);
        }
      }
    }
    console.log(matchedProducts);
    dataForClient.orderedItem = JSON.stringify(matchedProducts);
    dataForClient.totalPrice = totalPrice;
    const creationDate = getLatestDate();

    await myPool.query(
      "INSERT INTO orders(ordereditem, totalprice, orderid, useremail, creationdate) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
      [
        dataForClient.orderedItem,
        dataForClient.totalPrice,
        dataForClient.orderId,
        dataForClient.userEmail,
        creationDate,
      ]
    );
    return Response.json({ message: "Order Successful" }, { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Something Went Wrong" }, { status: 503 });
  }
};
export { POST };
