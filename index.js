import express from "express";

//const express = require("express");

// My routes
import { userRegistration } from "./routes/registration/userRegistration.js";
import { driverRegistration } from "./routes/registration/driverRegistration.js";
// import { userdriverlogin } from "./routes/userdriverlogin.js";
import { userQuery } from "./routes/queries/userQuery.js";
import { driverQuery } from "./routes/queries/driverQuery.js";
import { customQuery } from "./routes/queries/customQuery.js";
import { adminCredentials } from "./routes/credentials/adminCredentials.js";

const app = express();

const port = process.env.PORT || 1412;
app.listen(port, () => {
  console.log(`Server listening on port http://127.0.0.1:${port}`);
});

app.use(express.static("public"));
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// registration APIs
app.post("/api/registration/user", userRegistration);
app.post("/api/registration/driver", driverRegistration);

// login APIs
// app.post("/api/login", userdriverlogin);

// admin query APIs
app.post("/api/query/user", userQuery);
app.post("/api/query/driver", driverQuery);
app.post("/api/query/custom", customQuery);

// credentials APIs
app.post("/api/credentials/admin", adminCredentials);






















// app.post("/api/adminLogin", (req, res) => {
//   console.log(req.body);
//   // admin
//   /*
//   username pass token
//   vinay 123kit 16484
//   om 132
//   */
//   res.send({
//     status: "success",
//     code: 200,
//     token: "16484"
//   })
// });
// app.post("/api/query/user", (req, res) => {
//   console.log(req.body);
//   // admin
//   /*
//   username pass token
//   vinay 123kit 16484
//   om 132
//   */
//   res.send({
//     status: "success",
//     code: 200,
//     token: "16484"
//   })
// });
