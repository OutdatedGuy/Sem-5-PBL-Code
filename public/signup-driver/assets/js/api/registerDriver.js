import { driverInfo } from "../forms/driverForm.js";
import { licenseInfo } from "../forms/licenseForm.js";
import { loginInfo } from "../forms/loginForm.js";

const registerDriver = async () => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const data = {
    ...driverInfo,
    ...licenseInfo,
    ...loginInfo,
  };

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("/api/registration/driver", arg);
    const result = await response.json();

    if (result.code === 200) {
      alert("Driver Registered Successfully...");
      window.location.replace("../");
    } else if (result.code === 500) {
      throw new Error(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("Driver Registration Failed!!!\nPlease try again later!");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { registerDriver };
