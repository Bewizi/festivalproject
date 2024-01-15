// icon click for mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu");
  const closeIcon = document.querySelector(".close");
  const nav = document.querySelector(".nav");

  menuIcon.addEventListener("click", () => {
    nav.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    nav.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

// Adjust the margin-top of the main element when the page is resized
window.addEventListener("resize", function () {
  const headerHeight = document.querySelector("header").offsetHeight;
  document.querySelector(".main").style.marginTop = headerHeight + "px";
});

// Trigger the resize event on page load
window.dispatchEvent(new Event("resize"));
