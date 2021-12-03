import { connection } from "../../database.js";

const acceptingTrip = (req, res) => {
  // console.log(req.body);

  try {
    const {
      tripID,
      token
    } = req.body

    if (!tripID || !token) {
      console.log("Not all fields provided!!!");
      return res.status(400).send({
        message: "Not all fields provided!!!",
        status: "failure",
        code: 400,
      });
    }

    //driverID
    const query = `select driver_id, t_earn from driver where token = '${token}'`;
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

        const statusQuery = `select status, fare from trip where trip_id=${tripID}`;

        connection.query(statusQuery, function (error, results2) {
          if (error) throw new Error(error);
          console.log(results2);

          const status = results2[0].status;
          if (status === 0) {

            const insertQuery = `update trip set driver_id = ${results1[0].driver_id} and status = 1 where trip_id=${tripID}`;
            connection.query(insertQuery, function (error, results3) {
              if (error) throw new Error(error);

              const newEarning = results1[0].t_earn + results2[0].fare;
              const updateQuery = `update driver set t_earn = ${newEarning} where driver_id=${results1[0].     driver_id}`;
              connection.query(updateQuery, function (error) {
                if (error) throw new Error(error);
                connection.query(statusQuery, function (error, results2) {
                  return res.send({
                    message: "Trip Accepted Successful...",
                    status: "success",
                    code: 200,
                  });
                });
              });
            });
          }
          else {
            return res.send({
              message: "This trip is already booked...",
              status: "failure",
              code: 400,
            });
          }

          return res.send({
            message: "Trip Booked Successful...",
            status: "success",
            code: 200,
          });
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

export { acceptingTrip };
