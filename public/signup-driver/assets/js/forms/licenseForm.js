let licenseInfo;

import { nextStep, prevStep } from "./progressBar.js";

const setLicenseForm = () => {
  const licenseFormContainer = document.querySelector("#license-form");
  const licenseForm = document.querySelector("#licenseForm");
  const prevBtn = licenseForm.querySelector(".prev-btn");

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    licenseFormContainer.style.display = "none";
    document.querySelector("#driver-form").style.display = "block";

    prevStep();
  });

  licenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    licenseInfo = {
      licenseNumber: licenseForm.licenseNumber.value,
      expiryDate: licenseForm.expiryDate.value,
      address: licenseForm.address.value,
      city: licenseForm.city.value,
      pincode: licenseForm.pincode.value,
    };

    nextStep();

    licenseFormContainer.style.display = "none";
    document.querySelector("#login-form").style.display = "block";

    console.log(licenseInfo);
  });
};

export { setLicenseForm, licenseInfo };
