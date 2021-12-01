const adminLogin = async (data) => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("/api/login/admin", arg);
    const result = await response.json();

    if (result.code === 200) {
      const token = result.data.token;
      window.location.replace(`../admin/?token=${token}`);
    } else if (result.code === 500) {
      throw new Error(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("Login Failed...\nPlease try again later!");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { adminLogin };
