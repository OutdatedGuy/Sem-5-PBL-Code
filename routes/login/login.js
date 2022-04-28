import { connection } from "../../database.js";
import { randomBytes } from "crypto";

const login = async (req, res) => {
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
    await connection.connect();
    const [results] = await connection.query(query);
    if (results.length === 0) {
      return res.send({
        status: "failure",
        code: 400,
        message: "This Username does NOT Exists!!!",
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
        code: 400,
        message: "Invalid Credentials!!!",
      });
    } else {
      const token = randomBytes(8).toString("hex");
      const updateQuery = `update ${role} set token = '${token}' where userName = '${userName}'`;
      await connection.query(updateQuery);
      return res.send({
        status: "success",
        code: 200,
        data: {
          token: token,
        },
      });
    }
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
