import { connection } from "../../database.js";
import { randomBytes } from "crypto";

const adminLogin = (req, res) => {
  console.log(req.body);

  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(403).send({
        status: "failure",
        message: "All fields are required",
        code: 403,
      });
    }

    const query = `select * from admin where userName = '${userName}' and password = '${password}'`;
    connection.query(query, function (error, results) {
      if (error) throw error;
      // console.log({results});
      if (results.length === 0) {
        return res.send({
          status: "failure",
          message: "Invalid credentials",
          code: 400,
        });
      } else {
        const token = randomBytes(8).toString("hex");
        const updateQuery = `update admin set token = '${token}' where userName = '${userName}'`;
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

export { adminLogin };
