import { connection } from "../../database.js";

const adminSessionEnd = (req, res) => {
  // console.log(req.body);

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        status: "error",
        message: "Token is required",
      });
    }

    const updateQuery = `update admin set token = ${null} where token = '${token}'`;
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
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Something went Wrong!!!",
      status: "failure",
      code: 500,
    });
  }
};

export { adminSessionEnd };
