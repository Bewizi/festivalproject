document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("transparent", window.scrollY > 0);
});
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

// form validation
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// form id
let fullname = id("fullname"),
  email = id("email"),
  form = id("form"),
  message = id("text");

// form class
errorMsg = classes("error");

// btn event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(fullname, 0, "fullname cannot be blank");
  engine(email, 1, "email cannot be blank");
  engine(message, 2, "message cannot be blank");
});

// create a function named engine which will do all sorts of form validation work for us

let engine = (id, serial, message) => {
  if (id.value.trim() == "") {
    errorMsg[serial].innerHTML = message;
  } else {
    errorMsg[serial].innerHTML = " ";
  }
};
