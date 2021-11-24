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
      reachTime1: tripQueryForm.reachTime1.value,
      reachTime2: tripQueryForm.reachTime2.value,
    };

    getQueryData(tripQueryInfo, "trip");
  });
};

export { setTripQueryForm };
