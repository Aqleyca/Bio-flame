const menuButton = document.getElementById("menu-icon");
const menuIcon = menuButton.firstElementChild;
const menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  menuIcon.classList.toggle("ph-list");
  menuIcon.classList.toggle("ph-x-circle");
});