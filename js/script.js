// Togle class active //
const navbarNav = document.querySelector(".navbar-nav");
//Click Action on hamburger menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click Action Everywhere to remove sidebar
const menuham = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menuham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
