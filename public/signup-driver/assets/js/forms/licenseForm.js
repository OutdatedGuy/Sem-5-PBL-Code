import { nextStep, prevStep } from "/assets/js/forms/progressBar.js";

let licenseInfo;

const setLicenseForm = () => {
  const licenseFormContainer = document.querySelector("#license-form");
  const licenseForm = document.querySelector("#licenseForm");
  const prevBtn = licenseForm.querySelector(".prev-btn");

  // Set expiryDate form min date to tomorrow
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const tomorrowDate = yyyy + "-" + mm + "-" + dd;
  licenseForm
    .querySelector("input[name='expiryDate']")
    .setAttribute("min", tomorrowDate);

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
