let userInfo;

import { nextStep } from "./progressBar.js";

const setUserForm = () => {
  const userFormContainer = document.querySelector("#user-form");
  const userForm = document.querySelector("#userForm");

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
