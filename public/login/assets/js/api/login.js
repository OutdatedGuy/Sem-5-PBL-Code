const login = async (data) => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("/api/login", arg);
    const result = await response.json();

    if (result.status === "success") {
      alert("Login Successfully!!!");
      window.location.href = "../";
    } else {
      alert("Login Failed...");
    }
  } catch (error) {
    console.log(error);
    alert("Login Failed...");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { login };
