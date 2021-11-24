import { getQueryData } from "../api/getQueryData.js";

const setUserQueryForm = () => {
  const userQueryForm = document.querySelector("#userQueryForm");

  userQueryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userQueryInfo = {
      fullName: userQueryForm.fullName.value,
      gender: userQueryForm.gender.value,
      birthDateR1: userQueryForm.birthDateR1.value,
      birthDateR2: userQueryForm.birthDateR2.value,
      ageR1: userQueryForm.ageR1.value,
      ageR2: userQueryForm.ageR2.value,
    };

    getQueryData(userQueryInfo, "user");
  });
};

export { setUserQueryForm };
