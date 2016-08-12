$(document).ready(function () {
  $("#login").submit(function() {
    $("#message").fadeIn("slow", function() {
      $(this).fadeOut("slow");
    });
  });
}
