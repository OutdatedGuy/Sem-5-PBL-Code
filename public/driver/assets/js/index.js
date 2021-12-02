import { setAcceptTripForm } from "./forms/setAcceptTripForm.js";
import { setAvailableTripsBtn } from "./forms/setAvailableTripsBtn.js";
import { getAvailableTrips } from "./api/getAvailableTrips.js";
import { setBookingHistoryBtn } from "./forms/setBookingHistoryBtn.js";
import { setTable } from "./DataTable---Fully-BSS-Editable.js";

$(document).ready(() => {
  setAcceptTripForm();
  setAvailableTripsBtn();
  getAvailableTrips();
  setBookingHistoryBtn();
  setTable(1);
  setTable(2);
});
