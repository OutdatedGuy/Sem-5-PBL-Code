import { fillTable } from "../fillTable.js";

const getAvailableTrips = async () => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  // get params from url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  };

  try {
    const response = await fetch(`/api/trip/available`, arg);
    const result = await response.json();

    if (result.code === 200 && result.data) {
      fillTable(result.data, 1);
    } else if (result.code === 500) {
      throw new Error(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("Error while loading available trips!!!\nPlease try again later!");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { getAvailableTrips };
