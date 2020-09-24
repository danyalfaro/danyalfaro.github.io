const menuLinks = document.getElementById("menuLinks");
document.getElementById("burger").addEventListener("click", () => {
  console.log("CLICKEDDDD!");
  menuLinks.classList.toggle("burgerActive");
});
