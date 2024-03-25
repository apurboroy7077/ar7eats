const { Pool } = require("pg");
const myPool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "ar7eats",
  password: "LionelMessi7",
  connectionTimeoutMillis: 5000,
});

export { myPool };
