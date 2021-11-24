import { getQueryData } from "../api/getQueryData.js";

const setDriverQueryForm = () => {
  const driverQueryForm = document.querySelector("#driverQueryForm");

  driverQueryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const driverQueryInfo = {
      fullName: driverQueryForm.fullName.value,
      gender: driverQueryForm.gender.value,
      birthDateR1: driverQueryForm.birthDateR1.value,
      birthDateR2: driverQueryForm.birthDateR2.value,
      ageR1: driverQueryForm.ageR1.value,
      ageR2: driverQueryForm.ageR2.value,
      city: driverQueryForm.city.value,
      pincode: driverQueryForm.pincode.value,
    };

    getQueryData(driverQueryInfo, "driver");
  });
};

export { setDriverQueryForm };
