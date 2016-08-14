$(document).ready(function () {
  var failure = "Invalid account, please try again.";
  var success = "Welcome back, connecting you now...";
  var url = "http://www.tng247.com/";

  $("#signin").html(failure);

  $("form").submit(function (e) {
    e.preventDefault();

//    alert(failure);

    location.href = url + "#signin";
    location.reload(true);
  });
});
