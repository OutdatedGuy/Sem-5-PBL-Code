import { getQueryData } from "../api/getQueryData.js";

const setCustomQueryForm = () => {
  const customQueryForm = document.querySelector("#customQueryForm");

  customQueryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const customQueryInfo = {
      customQuery: customQueryForm.customQuery.value,
    };

    getQueryData(customQueryInfo, "custom");
  });
};

export { setCustomQueryForm };
