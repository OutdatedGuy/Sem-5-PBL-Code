import { connection } from "../../database.js";
import { randomBytes } from "crypto";

const login = (req, res) => {
  // console.log(req.body);
  const roles = ["admin", "user", "driver"];

  try {
    const { userName, password } = req.body;
    const role = req.params.role;

    if (!userName || !password || !role) {
      return res.status(403).send({
        status: "failure",
        message: "All fields are required!!!",
        code: 403,
      });
    } else if (!roles.includes(role)) {
      return res.status(403).send({
        status: "failure",
        message: "Invalid role!!!",
        code: 403,
      });
    }

    const query = `select * from ${role} where userName = '${userName}'`;
    connection.query(query, function (error, results) {
      if (error) throw error;
      // console.log({results});
      if (results.length === 0) {
        return res.send({
          status: "failure",
          message: "This Username does NOT Exists!!!",
          code: 400,
        });
      } else if (results[0].token !== null) {
        return res.send({
          status: "failure",
          message: "Already logged in!!!",
          code: 400,
        });
      } else if (results[0].password !== password) {
        return res.send({
          status: "failure",
          message: "Invalid Credentials!!!",
          code: 400,
        });
      } else {
        const token = randomBytes(8).toString("hex");
        const updateQuery = `update ${role} set token = '${token}' where userName = '${userName}'`;
        connection.query(updateQuery, function (error) {
          if (error) throw error;

          return res.send({
            status: "success",
            code: 200,
            data: {
              token: token,
            },
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Something went Wrong!!!",
      status: "failure",
      code: 500,
    });
  }
};

export { login };
