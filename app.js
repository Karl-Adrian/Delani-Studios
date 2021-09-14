$(document).ready(function () {
  // toggle between para and picha //
  $("#design").click(function () {
    $("#design2").toggle();
    $("#design1").toggle();
  });
  $("#development").click(function () {
    $("#development2").toggle();
    $("#development1").toggle();
  });
  $("#projectManagement").click(function () {
    $("#project2").toggle();
    $("#project1").toggle();
  });
});
