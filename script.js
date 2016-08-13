$(document).ready(function () {
  var FAILURE = "Invalid details, please try again.";
  var SUCCESS = "Welcome back, connecting you now...";

  $(".message").html("&nbsp;").removeClass("pulse");

  $("#login").submit(function () {
//    alert(FAILURE);
    $(".message").html(FAILURE).addClass("pulse");
  });
});
