import { nextStep } from "/assets/js/forms/progressBar.js";

let userInfo;

const setUserForm = () => {
  const userFormContainer = document.querySelector("#user-form");
  const userForm = document.querySelector("#userForm");

  // Set birthDate form max date to today
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  userForm
    .querySelector("input[name='birthDate']")
    .setAttribute("max", todayDate);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    userInfo = {
      fullName: userForm.fullName.value,
      gender: userForm.gender.value,
      birthDate: userForm.birthDate.value,
      email: userForm.email.value,
      phone: userForm.phone.value,
    };

    nextStep();

    userFormContainer.style.display = "none";
    document.querySelector("#login-form").style.display = "block";

    console.log(userInfo);
  });
};

export { setUserForm, userInfo };
