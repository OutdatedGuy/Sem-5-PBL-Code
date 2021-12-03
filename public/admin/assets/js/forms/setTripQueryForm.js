import { getQueryData } from "../api/getQueryData.js";

const setTripQueryForm = () => {
  const tripQueryForm = document.querySelector("#tripQueryForm");

  tripQueryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tripQueryInfo = {
      place1: tripQueryForm.place1.value,
      place2: tripQueryForm.place2.value,
      startTime1: tripQueryForm.startTime1.value,
      startTime2: tripQueryForm.startTime2.value,
      ac: tripQueryForm.ac.value,
      status: tripQueryForm.status.value,
      fare1: tripQueryForm.fare1.value,
      fare2: tripQueryForm.fare2.value,
    };

    getQueryData(tripQueryInfo, "trip");
  });
};

export { setTripQueryForm };
