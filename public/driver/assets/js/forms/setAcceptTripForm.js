import { acceptTrip } from "../api/acceptTrip.js";

const setAcceptTripForm = () => {
  const acceptTripForm = document.querySelector("#acceptTripForm");

  acceptTripForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tripInfo = {
      tripID: acceptTripForm.tripID.value,
    };

    acceptTrip(tripInfo);
  });
};

export { setAcceptTripForm };
