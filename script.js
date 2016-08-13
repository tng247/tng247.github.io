$(document).ready(function () {
  var FAILURE = "Invalid details, please try again.";
  var SUCCESS = "Welcome back, connecting you now...";

//  $(".message").html("&nbsp;").removeClass("pulse");

  $("#login").submit(function (e) {
    e.preventDefault();
//    alert(FAILURE);
    $("#submit").click(function () {
      $(".message").html(FAILURE).addClass("pulse");
    });
  });
});
