const bookTrip = async (data) => {
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
    const response = await fetch(`/api/trip/booking`, arg);
    const result = await response.json();

    if (result.code === 200) {
      const tripId = result.data.tripId;
      const fare = result.data.fare;

      alert(
        `Trip Booking Successful...
        
Your Trip FARE will be ₹${fare}
Your Trip ID is ${tripId}

Note for future reference`
      );
      document.querySelector("#bookingForm").reset();
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

export { bookTrip };
