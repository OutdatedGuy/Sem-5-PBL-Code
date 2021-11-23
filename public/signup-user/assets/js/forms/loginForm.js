import { registerUser } from "../api/registerUser.js";
import { prevStep } from "/assets/js/forms/progressBar.js";

let loginInfo;

const setLoginForm = () => {
  const loginFormContainer = document.querySelector("#login-form");
  const loginForm = document.querySelector("#loginForm");
  const prevBtn = loginForm.querySelector(".prev-btn");

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    loginFormContainer.style.display = "none";
    document.querySelector("#user-form").style.display = "block";

    prevStep();
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (loginForm.password.value !== loginForm.confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }

    loginInfo = {
      userName: loginForm.userName.value,
      password: loginForm.password.value,
    };

    await registerUser();
  });
};

export { setLoginForm, loginInfo };
