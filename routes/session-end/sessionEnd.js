import { connection } from "../../database.js";

const sessionEnd = (req, res) => {
  // console.log(req.body);
  const roles = ["admin", "user", "driver"];

  try {
    const { token } = req.body;
    const role = req.params.role;

    if (!token || !role) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Token is required",
      });
    } else if (!roles.includes(role)) {
      return res.status(403).send({
        status: "failure",
        message: "Invalid role!!!",
        code: 403,
      });
    }

    const updateQuery = `update ${role} set token = ${null} where token = '${token}'`;
    connection.query(updateQuery, function (error) {
      if (error) throw error;

      return res.send({
        status: "success",
        code: 200,
        message: "Session ended successfully",
      });
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

export { sessionEnd };
