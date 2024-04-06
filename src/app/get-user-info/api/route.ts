import { JWT_SECRET_KEY } from "@/data/Variables";
import jwt from "@/utils/JWT";
import { myPool } from "@/utils/PostgresqlConfiguration";

const GET = async (request: Request) => {
  try {
    let authToken = request.headers.get("authorization");
    let dataInToken = jwt.verify(authToken, JWT_SECRET_KEY);
    let { email } = dataInToken;
    let userData = await myPool.query("SELECT * FROM userdata WHERE email=$1", [
      email,
    ]);
    userData = userData.rows[0];
    delete userData.password;

    return Response.json(
      {
        userData: userData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ errorMessage: error }, { status: 401 });
  }
};
export { GET };
