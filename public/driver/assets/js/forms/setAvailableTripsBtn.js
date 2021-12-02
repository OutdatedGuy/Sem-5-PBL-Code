import { getAvailableTrips } from "../api/getAvailableTrips.js";

const setAvailableTripsBtn = () => {
  const availableForm = document.querySelector("#availableForm");

  availableForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getAvailableTrips();
  });
};

export { setAvailableTripsBtn };
