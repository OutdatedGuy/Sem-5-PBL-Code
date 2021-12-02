import { connection } from "../../database.js";

const credentials = (req, res) => {
  // console.log(req.body);
  const roles = ["admin", "user", "driver"];

  try {
    const { token } = req.body;
    const role = req.params.role;

    if (!token || !role) {
      return res.status(400).send({
        status: "failure",
        message: "Token is required",
        code: 400,
      });
    } else if (!roles.includes(role)) {
      return res.status(403).send({
        status: "failure",
        message: "Invalid role!!!",
        code: 403,
      });
    }

    const query = `select * from ${role} where token = '${token}'`;
    connection.query(query, function (error, results) {
      if (error) throw error;
      // console.log({results});
      if (results.length === 0) {
        return res.send({
          status: "failure",
          code: 400,
          message: "Invalid token",
        });
      } else {
        return res.send({
          status: "success",
          code: 200,
          data: {
            userName: results[0].name,
          },
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

export { credentials };
