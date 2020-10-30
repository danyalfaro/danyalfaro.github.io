const menuLinks = document.getElementById("menuLinks");
const burger = document.getElementById("burger");
document.getElementById("burger").addEventListener("click", () => {
  menuLinks.classList.toggle("burgerActive");
  burger.classList.toggle("burgerClose");
});
