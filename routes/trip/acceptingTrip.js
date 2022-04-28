import { connection } from "../../database.js";
// Migration to Async/Await

const acceptingTrip = async (req, res) => {
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
    await connection.connect();
    const [results1] = await connection.query(query);

    if (results1.length === 0) {
      return res.send({
        status: "failure",
        code: 400,
        message: "Invalid token",
      });
    } else {
      const tripIdCheck = `select trip_id from trip where trip_id = ${tripID}`;

      //Query to get valid Trip ID if user enter ngatve or tripid which is not exist in trip table
      const [results2] = await connection.query(tripIdCheck);

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

          const [results3] = await connection.query(statusQuery);        //Query to get current status of Trip
          // console.log(results3);

          const taxitypeQuery = `select ac from taxi where driver_id = ${results1[0].driver_id}`;
          const [results4] = await connection.query(taxitypeQuery);      //Query for getting taxi type 
          const taxiAc = results4[0].ac;

          const status = results3[0].status;
          const ac = results3[0].ac;

          if (ac === taxiAc) {    //Checking for driver entering valid trip ID for taxi Type
            if (status === 0) {   //Checking Status of Trip
              const insertdriverQuery = `update trip set driver_id = ${results1[0].driver_id} where trip_id = ${tripID}`;

              await connection.query(insertdriverQuery);      //Assigning Driver to Trip
              // console.log(results5);

              const updatestatusQuery = `update trip set status = 1 where trip_id = ${tripID}`;
              await connection.query(updatestatusQuery);    //Updating Trip status toCompleted
              // console.log(results6);

              const newEarning = results1[0].t_earn + results3[0].fare;
              const updateQuery = `update driver set t_earn = ${newEarning} where driver_id = ${results1[0].driver_id}`;
              await connection.query(updateQuery);
              // console.log(results7);

              await connection.query(statusQuery);
              // console.log(results8);

              return res.send({
                message: "Trip Accepted Successfully...",
                status: "success",
                code: 200,
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
        }
        else {
          return res.send({
            message: "Invalid Trip ID...",
            status: "failure",
            code: 400,
          });
        }
      }
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

export { acceptingTrip };
