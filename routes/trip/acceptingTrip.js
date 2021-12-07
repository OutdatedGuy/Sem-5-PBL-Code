import { connection } from "../../database.js";

const acceptingTrip = (req, res) => {
  // console.log(req.body);

  try {
    const { tripID, token } = req.body

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
        const tripIdCheck = `select trip_id from trip where trip_id = ${tripID}`;

        //Query to get valid Trip ID if user enter ngatve or tripid which is not exist in trip table
        connection.query(tripIdCheck, function (error, results2) {
          if (error) throw new Error(error);

          if (results2.length === 0) {
            return res.send({
              status: "failure",
              code: 400,
              message: "Entered Trip ID is not valid...\nPlease Provide Valid Trip ID to continue.",
            });
          } else {
            const tripid = results2[0].trip_id;

            if (tripid == tripID) {                                           //Check for Valid Trip ID
              const statusQuery = `select trip_id, status, fare, ac from trip where trip_id = ${tripID}`;

              connection.query(statusQuery, function (error, results3) {        //Query to get current status of Trip
                if (error) throw new Error(error);
                // console.log(results3);

                const taxitypeQuery = `select ac from taxi where driver_id = ${results1[0].driver_id}`;
                connection.query(taxitypeQuery, function (error, results4) {      //Query for getting taxi type 
                  if (error) throw new Error(error);
                  const taxiAc = results4[0].ac;

                  const status = results3[0].status;
                  const ac = results3[0].ac;

                  if (ac === taxiAc) {    //Checking for driver entering valid trip ID for taxi Type
                    if (status === 0) {   //Checking Status of Trip
                      const insertdriverQuery = `update trip set driver_id = ${results1[0].driver_id} where trip_id = ${tripID}`;

                      connection.query(insertdriverQuery, function (error) {      //Assigning Driver to Trip
                        if (error) throw new Error(error);

                        const updatestatusQuery = `update trip set status = 1 where trip_id = ${tripID}`;
                        connection.query(updatestatusQuery, function (error) {    //Updating Trip status toCompleted
                          if (error) throw new Error(error);

                          const newEarning = results1[0].t_earn + results3[0].fare;
                          const updateQuery = `update driver set t_earn = ${newEarning} where driver_id = ${results1[0].driver_id}`;
                          connection.query(updateQuery, function (error) {
                            if (error) throw new Error(error);

                            connection.query(statusQuery, function (error) {
                              if (error) throw new Error(error);

                              return res.send({
                                message: "Trip Accepted Successful...",
                                status: "success",
                                code: 200,
                              });
                            });
                          });
                        });
                      });
                    }
                    else {
                      return res.send({
                        message: "This trip is already booked...\nLet's go with another one",
                        status: "failure",
                        code: 400,
                      });
                    }
                  }
                  else {
                    return res.send({
                      message: "Check Entered Trip ID...\nThis trip don't match with your taxi type\nLet's go with another one from following list",
                      status: "failure",
                      code: 400,
                    });
                  }

                });
              });
            }
            else {
              return res.send({
                message: "Invalid Trip ID...",
                status: "failure",
                code: 400,
              });
            }
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

export { acceptingTrip };
