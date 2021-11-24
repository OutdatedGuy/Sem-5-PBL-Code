import { fillTable } from "../fillTable.js";

const getQueryData = async (data, to) => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`/api/query/${to}`, arg);
    const result = await response.json();

    if (result.code === 200 && result.data) {
      fillTable(result.data);
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

export { getQueryData };
