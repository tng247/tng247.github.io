$(document).ready(function () {
  var HTML = "<p class=\"message\">Invalid account details, please try again.</p>";

  $("#login").submit(function () {
//    alert("Invalid account details, please try again.");
    $("#submit").after(HTML);
  });
});
