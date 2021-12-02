import { connection } from "../../database.js";

const driverRegistration = (req, res) => {
  try {
    const {
      fullName,
      gender,
      birthDate,
      email,
      phone,
      licenseNumber,
      expiryDate,
      address,
      city,
      pincode,
      userName,
      password,
    } = req.body;

    if (
      !fullName ||
      !gender ||
      !birthDate ||
      !email ||
      !phone ||
      !licenseNumber ||
      !expiryDate ||
      !address ||
      !city ||
      !pincode ||
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

    const checkQuery = `select * from driver where userName = "${userName}"`;
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

        const query = `insert into driver(name, gender, birth, age, mail, phone,  license_number, license_expiry, address, city, pincode, userName, password) values("${fullName}", "${gender}", "${birthDate}", "${age}", "${email}", "${phone}", "${licenseNumber}", "${expiryDate}", "${address}", "${city}", "${pincode}", "${userName}", "${password}")`;

        connection.query(query, function (error) {
          if (error) throw new Error(error);

          return res.send({
            message: "Driver Registration Successful...",
            status: "success",
            code: 200,
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Driver Registration Failed!!!",
      status: "failure",
      code: 500,
    });
  }
};

export { driverRegistration };
