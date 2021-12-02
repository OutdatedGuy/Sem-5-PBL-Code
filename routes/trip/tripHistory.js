import { connection } from "../../database.js";

const tripHistory = (req, res) => {
  // console.log(req.body);
  const roles = ["user", "driver"];

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

    const id = `${role}_id`;
    // getting user/driver id from token
    const getQuery = `select ${id} from ${role} where token = '${token}'`;
    connection.query(getQuery, function (error, results1) {
      if (error) throw error;
      // console.log(results1);

      if (results1.length === 0) {
        return res.send({
          status: "failure",
          message: "Invalid credentials",
          code: 400,
        });
      } else {
        let tripQuery = `select t.trip_id, t.startPlace, t.endPlace, t.startTime, t.ac, t.fare, t.status, `;
        tripQuery += role === "user"
          ? `d.name, d.phone from trip t, driver d where t.driver_id = d.driver_id and t.user_id = ${results1[0][id]}`
          : `u.name, u.phone from trip t, user u where t.user_id = u.user_id and t.driver_id = ${results1[0][id]}`;

        connection.query(tripQuery, function (error, results2) {
          if (error) throw error;

          if (results2.length === 0) {
            return res.send({
              status: "success",
              message: "No data available!!!",
              code: 200,
              data: {
                properties: [],
                values: [],
              }
            });
          } else {
            results2 = results2.map((result) => {
              return {
                ...result,
                ac: result.ac ? "AC" : "Non-AC",
                status: result.status ? "Completed" : "Not Completed",
              }
            })
            return res.send({
              status: "success",
              message: "Ok",
              code: 200,
              data: {
                properties: Object.getOwnPropertyNames(results2[0]),
                values: results2,
              }
            });
          }
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

export { tripHistory };
