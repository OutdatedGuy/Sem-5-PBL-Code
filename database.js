import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'test',
  insecureAuth: true
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// let query = "insert into user values('Vinayak Mali','Male')";
// connection.query(query, function (error, results, fields) {
//   if (error)
//       throw error;

//   results.forEach(result => {
//       console.log(result);
//   });
// });

// connection.end();
export { connection };
//insert into user(birth,date) values()