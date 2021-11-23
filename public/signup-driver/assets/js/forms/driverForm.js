import { nextStep } from "/assets/js/forms/progressBar.js";

let driverInfo;

const setDriverForm = () => {
  const driverFormContainer = document.querySelector("#driver-form");
  const driverForm = document.querySelector("#driverForm");

  // Set birthDate form max date to today
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  driverForm
    .querySelector("input[name='birthDate']")
    .setAttribute("max", todayDate);

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
