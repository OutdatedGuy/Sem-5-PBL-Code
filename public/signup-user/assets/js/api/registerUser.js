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

  const response = await fetch("/api/userRegistration", arg);
  const result = await response.json();

  document.querySelector(".loadingContainer").classList.toggle("loading");

  if (result.status === "success") {
    alert("User registered successfully");
    window.location.href = "../";
  } else {
    alert("User registration failed");
  }
};

export { registerUser };
