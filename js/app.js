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

/*form validation*/
$("#target").submit(function (event) {
  event.preventDefault();
  var name = $("input#text").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();
  if ($("input#text").val() && $("input#email").val()) {
    alert(
      name + ", we have received your message. Thank your for reaching to us."
    );
  } else {
    alert("Please enter your name and email please!");
  }
});
