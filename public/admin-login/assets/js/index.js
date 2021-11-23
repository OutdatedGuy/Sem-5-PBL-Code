import { adminLogin } from "./api/adminLogin.js";

const adminLoginForm = document.querySelector("#adminLoginForm");

adminLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginInfo = {
    userName: adminLoginForm.userName.value,
    password: adminLoginForm.password.value,
  };

  await adminLogin(loginInfo);
});
