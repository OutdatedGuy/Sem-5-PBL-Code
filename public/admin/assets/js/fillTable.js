import { setTable } from "./DataTable---Fully-BSS-Editable.js";

const fillTable = (data) => {
  $(".mydatatable").DataTable().destroy();

  document.getElementById("dataTable").style.display = "block";
  const myTable = document.getElementById("mydatatable");

  const myTableHead = myTable.getElementsByTagName("thead")[0];
  const myTableBody = myTable.getElementsByTagName("tbody")[0];

  if (data.properties.length > 0) {
    let tableHead = "<tr>";
    data.properties.forEach((property) => {
      tableHead += `<th>${property}</th>`;
    });
    tableHead += "</tr>";
    myTableHead.innerHTML = tableHead;

    let tableBody = "";
    data.values.forEach((value) => {
      tableBody += "<tr>";
      data.properties.forEach((property) => {
        tableBody += `<td>${value[property]}</td>`;
      });
      tableBody += "</tr>";
    });
    myTableBody.innerHTML = tableBody;
  } else {
    myTableHead.innerHTML = "<tr><th>No data</th></tr>";
    myTableBody.innerHTML = "<tr><td>No data</td></tr>";
  }

  setTable();
  myTable.focus();
};

export { fillTable };
