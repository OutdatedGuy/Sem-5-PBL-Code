import { connection } from "../../database.js";

const availableTrip = (req, res) => {
  // console.log(req.body);

  try {
    const { token } = req.body

    if (!token) {
      console.log("Not all fields provided!!!");
      return res.status(400).send({
        message: "Not all fields provided!!!",
        status: "failure",
        code: 400,
      });
    }

    //driverID
    const query = `select driver_id from driver where token = '${token}'`;
    connection.query(query, function (error, results1) {
      if (error) throw error;
      // console.log({ results });
      if (results1.length === 0) {
        return res.send({
          status: "failure",
          code: 400,
          message: "Invalid token",
        });
      } else {
        const driver_id = results1[0].driver_id;

        const taxiQuery = `select ac from taxi where driver_id = '${driver_id}'`;
        const tripQuery = `select t.trip_id, t.startPlace, t.endPlace, t.startTime, t.fare, u.name, u.phone from trip t, user u where t.status = 0 and t.user_id = u.user_id and t.ac = (${taxiQuery})`;

        connection.query(tripQuery, function (error, results2) {
          if (error) throw new Error(error);
          // console.log(results2);

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

export { availableTrip };
