import { connection } from "../database.js";

const userRegistration = (req, res) => {
  try {
    const { fullName, gender, birthDate, email, phone, userName, password } =
      req.body;

    // console.log({
    //   fullName,
    //   gender,
    //   birthDate,
    //   email,
    //   phone,
    //   userName,
    //   password,
    // });

    if (
      !fullName ||
      !gender ||
      !birthDate ||
      !email ||
      !phone ||
      !userName ||
      !password
    ) {
      console.log("Not all fields provided");
      return res.status(400).send({
        message: "Not all fields provided",
        status: "failure",
      });
    }

    const query = `insert into user(name,geneder,birth,mail,phone,username,password) values("${fullName}", "${gender}", "${birthDate}", "${email}", "${phone}", "${userName}", "${password}")`;
    connection.query(query, function (error, results, fields) {
      if (error)
          throw error;

      console.log("Success" + results);
    
      // results.forEach(result => {
      //     console.log(result);
      // });
    });

    return res.send({
      message: "User registration successful",
      status: "success",
      userId: 1,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "User registration failed",
      status: "failure",
    });
  }
};

export { userRegistration };
