import { setBookingForm } from "./forms/setBookingForm.js";
import { setBookingHistoryBtn } from "./forms/setBookingHistoryBtn.js";
import { setTable } from "./DataTable---Fully-BSS-Editable.js";

$(document).ready(() => {
  setBookingForm();
  setBookingHistoryBtn();
  setTable();
});
