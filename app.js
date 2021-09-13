$(document).ready(function () {
  $("#design1").click(function () {
    $("#design1").hide();
    $("#design2").show();
    $("#design2").click(function () {
      $("#design2").hide();
      $("#design1").show();
    });
  });
});
