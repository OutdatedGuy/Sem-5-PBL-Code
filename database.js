import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";
import fs from "fs";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 1800000,
  insecureAuth: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  fs.readdir("./Taxi_Management_DB/", (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      fs.readFile(`./Taxi_Management_DB/${file}`, "utf8", (err, data) => {
        if (err) throw err;
        connection.query(data, (err, result) => {
          if (err) throw err;
          console.log(result);
        });
      });
    });
  });
});

export { connection };
