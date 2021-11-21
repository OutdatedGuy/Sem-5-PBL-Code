import { setDriverForm } from "./forms/driverForm.js";
import { setLicenseForm } from "./forms/licenseForm.js";
import { setLoginForm } from "./forms/loginForm.js";

document.addEventListener("DOMContentLoaded", () => {
  setDriverForm();
  setLicenseForm();
  setLoginForm();
});
