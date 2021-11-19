const userRegistration = (req, res) => {
  try {
    const { fullName, gender, birthDate, email, phone, userName, password } =
      req.body;

    console.log({
      fullName,
      gender,
      birthDate,
      email,
      phone,
      userName,
      password,
    });

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
