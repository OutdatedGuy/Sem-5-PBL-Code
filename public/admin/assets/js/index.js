import { setDriverQueryForm } from "./forms/setDriverQueryForm.js";
import { setUserQueryForm } from "./forms/setUserQueryForm.js";
import { setTripQueryForm } from "./forms/setTripQueryForm.js";
import { setCustomQueryForm } from "./forms/setCustomQueryForm.js";
import { setTable } from "./DataTable---Fully-BSS-Editable.js";

$(document).ready(() => {
  setDriverQueryForm();
  setUserQueryForm();
  setTripQueryForm();
  setCustomQueryForm();
  setTable();
});
