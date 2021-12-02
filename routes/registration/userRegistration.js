import { connection } from "../../database.js";

const userRegistration = (req, res) => {
  try {
    const { fullName, gender, birthDate, email, phone, userName, password } =
      req.body;

    if (
      !fullName ||
      !gender ||
      !birthDate ||
      !email ||
      !phone ||
      !userName ||
      !password
    ) {
      console.log("Not all fields provided!!!");
      return res.status(400).send({
        message: "Not all fields provided!!!",
        status: "failure",
        code: 400,
      });
    }

    const checkQuery = `select * from user where userName = "${userName}"`;
    connection.query(checkQuery, function (error, results) {
      if (error) throw new Error(error);
      // console.log(results.length);

      if (results.length > 0) {
        return res.status(403).send({
          message: "Username Already Taken!!!\nUse a different one.",
          status: "failure",
          code: 403,
        });
      } else {
        const birthday = new Date(birthDate);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        const age = Math.floor(Math.abs(ageDate.getUTCFullYear() - 1970));

        const query = `insert into user(name, gender, birth, age, mail, phone, userName, password) values("${fullName}", "${gender}", "${birthDate}", "${age}", "${email}", "${phone}", "${userName}", "${password}")`;

        connection.query(query, function (error) {
          if (error) throw new Error(error);

          return res.send({
            message: "User Registration Successful...",
            status: "success",
            code: 200,
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "User Registration Failed!!!",
      status: "failure",
      code: 500,
    });
  }
};

export { userRegistration };
