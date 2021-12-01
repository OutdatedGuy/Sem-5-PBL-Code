import { userInfo } from "../forms/userForm.js";
import { loginInfo } from "../forms/loginForm.js";

const registerUser = async () => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const data = {
    ...userInfo,
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
    const response = await fetch("/api/registration/user", arg);
    const result = await response.json();

    if (result.code === 200) {
      alert("User Registered Successfully...");
      window.location.replace("../");
    } else if (result.code === 500) {
      throw new Error(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("User Registration Failed!!!\nPlease try again later!");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { registerUser };
