const navBar = document.querySelector(".navbar");
const offsethead = document.querySelector(".section");

window.addEventListener("scroll", () => {
  if (window.scrollY >
    offsethead.offsetTop - navBar.offsetHeight - 30) {
    navBar.classList.add("activate")
  } else {
    navBar.classList.remove("activate")
  }
})