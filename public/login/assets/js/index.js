import { login } from "./api/login.js";

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginInfo = {
    role: loginForm.role.value,
    userName: loginForm.userName.value,
    password: loginForm.password.value,
  };

  await login(loginInfo);
});
