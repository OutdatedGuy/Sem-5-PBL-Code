import { connection } from "../../database.js";

const adminCredentials = (req, res) => {
  // console.log(req.body);

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).send({
        status: "failure",
        message: "Token is required",
        code: 400,
      });
    }

    const query = `select * from admin where token = '${token}'`;
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
            adminName: results[0].fullName,
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

export { adminCredentials };
