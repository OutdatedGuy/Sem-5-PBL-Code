import { connection } from "../../database.js";

const tripQuery = async (req, res) => {
  // console.log(req.body);

  try {
    const { place1, place2, startTime1, startTime2, ac, status, fare1, fare2 } =
      req.body;

    let query = `select t.startPlace, t.endPlace, t.startTime, t.ac, d.name as driver, u.name as customer, t.fare, t.status from trip t, driver d, user u where t.driver_id = d.driver_id and u.user_id = t.user_id and `;
    query += place1 ? `t.startPlace like "%${place1}%" and ` : "";
    query += place2 ? `t.endPlace like "%${place2}%" and ` : "";
    query += startTime1 ? `t.startTime>="${startTime1}" and ` : "";
    query += startTime2 ? `t.startTime<="${startTime2}" and ` : "";
    query += ac ? `t.ac = ${ac} and ` : "";
    query += status ? `t.status = ${status} and ` : "";
    query += fare1 ? `t.fare >= ${fare1} and ` : "";
    query += fare2 ? `t.fare <= ${fare2} and ` : "";

    if (query.endsWith("and "))
      query = query.substr(0, query.length - 4);

    // console.log(query);

    await connection.connect();
    const [results] = await connection.query(query);

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
      const results2 = results.map((result) => {
        return {
          ...result,
          ac: result.ac ? "AC" : "Non-AC",
          status: result.status ? "Completed" : "Not Completed",
          fare: `₹${result.fare}`
        }
      });

      return res.send({
        status: "success",
        code: 200,
        data: {
          properties: Object.getOwnPropertyNames(results2[0]),
          values: results2,
        },
      });
    }
  }
  catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Something went Wrong!!!",
      status: "failure",
      code: 500,
    });
  }
};

export { tripQuery };