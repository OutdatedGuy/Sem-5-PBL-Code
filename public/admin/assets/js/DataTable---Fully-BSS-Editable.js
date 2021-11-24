const setTable = function () {
  $(".mydatatable").DataTable({
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "pdf", "print"],
    scrollY: 700,
    scrollX: true,
    autoWidth: false,
    scrollCollapse: true,
    paging: true,
    destroy: true,
  });
};

export { setTable };
