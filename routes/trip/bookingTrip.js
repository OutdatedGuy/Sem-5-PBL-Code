import { connection } from "../../database.js";

const bookingTrip = (req, res) => {
  // console.log(req.body);

  try {
    const {
      startPlace,
      endPlace,
      startTime,
      ac,
      token
    } = req.body

    if (
      !startPlace ||
      !endPlace ||
      !startTime ||
      !ac ||
      !token
    ) {
      console.log("Not all fields provided!!!");
      return res.status(400).send({
        message: "Not all fields provided!!!",
        status: "failure",
        code: 400,
      });
    }

    //userID
    const query = `select user_id from user where token = '${token}'`;
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
        const user_id = results1[0].user_id;

        const km = (Math.random() * 45) + 5;
        const fare = Math.round(km * (Math.floor(ac) ? 30 : 20));

        const insertQuery = `insert into trip(user_id, startPlace, endPlace, startTime, ac, fare, status) values(${user_id}, "${startPlace}", "${endPlace}", "${startTime}", ${ac}, ${fare}, 0)`;

        connection.query(insertQuery, function (error, results2) {
          if (error) throw new Error(error);
          // console.log(results2);

          const data = {
            tripId: results2.insertId,
            km,
            ac,
            fare,
          };

          return res.send({
            message: "Trip Booked Successful...",
            status: "success",
            code: 200,
            data,
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

export { bookingTrip };
