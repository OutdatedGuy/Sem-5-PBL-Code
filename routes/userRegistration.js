import { connection } from "../database.js";

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

    const query = `insert into user(name,geneder,birth,mail,phone,username,password) values("${fullName}", "${gender}", "${birthDate}", "${email}", "${phone}", "${userName}", "${password}")`;

    connection.query(query, function (error, results) {
      if (error) throw error;
      console.log(results);
    });

    return res.send({
      message: "User Registration Successful...",
      status: "success",
      code: 200,
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
