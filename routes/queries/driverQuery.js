import { connection } from "../../database.js";

const driverQuery = (req, res) => {
  // console.log(req.body);

  try {
    const { fullName, gender, birthDateR1, birthDateR2, ageR1, ageR2, city, pincode } =
      req.body;

    let query = `select name, gender, birth, age, mail, phone, license_number, city, pincode, t_earn as totalEarning from driver where `;
    query += fullName ? `name like "%${fullName}%" and ` : "";
    query += gender ? `gender="${gender}" and ` : "";
    query += birthDateR1 ? `birth>="${birthDateR1}" and ` : "";
    query += birthDateR2 ? `birth<="${birthDateR2}" and ` : "";
    query += ageR1 ? `age>="${Math.floor(ageR1)}" and ` : "";
    query += ageR2 ? `age<="${Math.floor(ageR2)}" and ` : "";
    query += city ? `city="${city}" and ` : "";
    query += pincode ? `pincode="${pincode}" and ` : "";

    if (query.endsWith("and "))
      query = query.substr(0, query.length - 4);
    else if (query.endsWith("where "))
      query = query.substr(0, query.length - 6);

    console.log(query);

    connection.query(query, function (error, results) {
      if (error) throw error;
      // console.log({results});
      if (results.length == 0) {
        return res.send({
          status: "success",
          code: 200,
          data: {
            properties: [],
            values: [],
          }
        });
      } else {
        results = results.map((result) => {
          return {
            ...result,
            totalEarning: `₹${result.totalEarning}`
          }
        });

        return res.send({
          status: "success",
          code: 200,
          data: {
            properties: Object.getOwnPropertyNames(results[0]),
            values: results,
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

export { driverQuery };