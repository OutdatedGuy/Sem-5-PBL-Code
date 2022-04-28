import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";
import fs from "fs/promises";

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

/**
 * @param {mysql.Connection} con The connection to the database
 */
const createDB = async (con) => {
  const files = await fs.readdir("./Taxi_Management_DB/");
  for (const file of files) {
    const data = await fs.readFile(`./Taxi_Management_DB/${file}`, "utf8");
    await con.query(data);
  }
  console.log("Done!");
};

export { connection, createDB };
