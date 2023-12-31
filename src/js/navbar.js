const toggleButton = document.getElementById("nav-menu");
const menu = document.getElementById("navbar-cta"); //Menu
var navbaric = document.getElementById("navbar-ic"); //Icon switch to X
var navbaric2 = document.getElementById("navbar-ic2"); //Icon switch to burger.

toggleButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  navbaric.classList.toggle("hidden");
  navbaric2.classList.toggle("hidden");
});
