
window.addEventListener("DOMContentLoaded",function(){
    alert("Welcome Anime Page");
});

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

