document.body.classList.add("animate-in");

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function(){
 $('.parallax').parallax();
 $('.parallax2').parallax();
});
