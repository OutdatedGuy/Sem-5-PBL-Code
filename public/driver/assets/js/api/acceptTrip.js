const acceptTrip = async (data) => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  // get params from url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, token }),
  };

  try {
    const response = await fetch(`/api/trip/accepting`, arg);
    const result = await response.json();

    if (result.code === 200) {
      alert("Trip accepted successfully...");
      document.querySelector("#acceptTripForm").reset();
    } else if (result.code === 500) {
      throw new Error(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong!!!\nPlease try again later!");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { acceptTrip };
