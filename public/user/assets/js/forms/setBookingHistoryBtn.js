import { getBookingHistory } from "../api/getBookingHistory.js";

const setBookingHistoryBtn = () => {
  const historyForm = document.querySelector("#historyForm");

  historyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBookingHistory();
  });
};

export { setBookingHistoryBtn };
