document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".nav-burger-menu");
  const navContainer = document.querySelector(".nav-container");
  const overlay = document.querySelector(".nav-overlay");

  //click hamburger sidebar menu appears
  burgerMenu.addEventListener("click", () => {
    const value = navContainer.getAttribute("data-visible");
    navContainer.setAttribute(
      "data-visible",
      value === "true" ? "false" : "true"
    );
  });

  //click overlay sidebar menu disappears
  overlay.addEventListener("click", () => {
    navContainer.setAttribute("data-visible", "false");
  });
});
