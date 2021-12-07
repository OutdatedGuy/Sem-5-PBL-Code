import { connection } from "../../database.js";

const customQuery = (req, res) => {
  // console.log(req.body);

  try {
    const { customQuery } = req.body;

    if (!customQuery) {
      return res.status(403).send({
        status: "failure",
        message: "Please provide a custom query!!!",
        code: 403,
      });
    }

    // console.log(customQuery);

    connection.query(customQuery, function (error, results) {
      if (error) throw error;
      // console.log({results});
      if (results.length == 0) {
        return res.send({
          status: "success",
          code: 200,
          data: {
            properties: [],
            values: [],
          },
        });
      } else {
        return res.send({
          status: "success",
          code: 200,
          data: {
            properties: Object.getOwnPropertyNames(results[0]),
            values: results,
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

export { customQuery };
