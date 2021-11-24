const fillTable = (data) => {
  document.getElementById("dataTable").style.display = "block";
  const myTable = document.getElementById("mydatatable");

  const myTableHead = myTable.getElementsByTagName("thead")[0];
  let tableHead = "<tr>";
  data.properties.forEach((property) => {
    tableHead += `<th>${property}</th>`;
  });
  tableHead += "</tr>";
  myTableHead.innerHTML = tableHead;

  const myTableBody = myTable.getElementsByTagName("tbody")[0];
  let tableBody = "";
  data.values.forEach((value) => {
    tableBody += "<tr>";
    data.properties.forEach((property) => {
      tableBody += `<td>${value[property]}</td>`;
    });
    tableBody += "</tr>";
  });
  myTableBody.innerHTML = tableBody;

  document.getElementById("mydatatable").focus();
};

export { fillTable };
