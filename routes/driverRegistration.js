import { connection } from "../database.js";

const driverRegistration = (req, res) => {
  try {
    const { fullName, gender, birthDate, email, phone, licenseNumber, expiryDate, address, city, pincode, userName, password } =
      req.body;

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
      console.log("Not all fields provided");
      return res.status(400).send({
        message: "Not all fields provided",
        status: "failure",
      });
    }

    const query = `insert into driver(name, gender, birth, mail, phone,  license_number, license_expiry, address, city, pincode, userName, password) values("${fullName}", "${gender}", "${birthDate}", "${email}", "${phone}", "${licenseNumber}", "${expiryDate}", "${address}", "${city}", "${pincode}", "${userName}", "${password}")`;
    connection.query(query, function (error, results, fields) {
      if (error)
        throw error;

      console.log("Success" + results);
    });

    return res.send({
      message: "Driver registration successful",
      status: "success",
      userId: 1,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Driver registration failed",
      status: "failure",
    });
  }
};

export { driverRegistration };
