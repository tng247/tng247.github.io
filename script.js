$(document).ready(function () {
  var MESSAGE = "Invalid account details, please try again.";

  $("#login").submit(function () {
//    alert("Invalid account details, please try again.");
    $(".message").html(MESSAGE);
  });
});
