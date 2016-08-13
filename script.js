$(document).ready(function () {
  var failure = "Invalid details, please try again.";
  var success = "Welcome back, connecting you now...";

  $("#login").submit(function (e) {
    e.preventDefault();
//    alert(failure);
//    $(".message").html(failure).addClass("peek");
    location.assign("/#submit");
    location.reload(true);
  });
});
