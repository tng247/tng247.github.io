$(document).ready(function () {
  var failure = "Invalid account, please try again.";
  var success = "Welcome back, connecting you now...";

  $("#signin").html(failure);

  $("#login").submit(function (e) {
    e.preventDefault();
//    alert(failure);
    location.assign("/#signin");
    location.reload(true);
  });
});
