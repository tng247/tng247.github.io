$(document).ready(function () {
  var failure = "Invalid details, please try again.";
  var success = "Welcome back, connecting you now...";

  $("#submit").html(failure);

  $("#login").submit(function (e) {
    e.preventDefault();
//    alert(failure);
    location.assign("/#submit");
    location.reload(true);
  });
});
