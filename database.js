import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Taxi_management_system",
  insecureAuth: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export { connection };
