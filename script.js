$(document).ready(function () {
  var failure = "Invalid account, please try again.";
  var success = "Welcome back, connecting you now...";

  $("#signin").html(failure);

  $("form").submit(function (e) {
    e.preventDefault();

//    alert(failure);

    location.replace("/#signin");
    location.reload(true);
  });
});
