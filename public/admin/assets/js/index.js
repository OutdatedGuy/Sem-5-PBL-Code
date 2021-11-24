import { setDriverQueryForm } from "./forms/setDriverQueryForm.js";
import { setUserQueryForm } from "./forms/setUserQueryForm.js";
import { setTripQueryForm } from "./forms/setTripQueryForm.js";
import { setCustomQueryForm } from "./forms/setCustomQueryForm.js";

document.addEventListener("DOMContentLoaded", () => {
  setDriverQueryForm();
  setUserQueryForm();
  setTripQueryForm();
  setCustomQueryForm();
});
