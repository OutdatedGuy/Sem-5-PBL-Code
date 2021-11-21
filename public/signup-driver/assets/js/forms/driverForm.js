let driverInfo;

import { nextStep } from "./progressBar.js";

const setDriverForm = () => {
  const driverFormContainer = document.querySelector("#driver-form");
  const driverForm = document.querySelector("#driverForm");

  driverForm.addEventListener("submit", (e) => {
    e.preventDefault();

    driverInfo = {
      fullName: driverForm.fullName.value,
      gender: driverForm.gender.value,
      birthDate: driverForm.birthDate.value,
      email: driverForm.email.value,
      phone: driverForm.phone.value,
    };

    nextStep();

    driverFormContainer.style.display = "none";
    document.querySelector("#license-form").style.display = "block";

    console.log(driverInfo);
  });
};

export { setDriverForm, driverInfo };
