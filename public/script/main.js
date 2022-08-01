document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".fa-bars").classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active-nav");
});

function resize_menu() {
  document.querySelector(".fa-bars").classList.remove("fa-times");
  document.querySelector(".navbar").classList.remove("active-nav");

  // console.log(window.scrollY > 30);
  if (window.scrollY > 30) {
    document.querySelector(
      ".header"
    ).style.cssText = `background: #6d65ce; box-shadow: 0 .2rem .5rem rgba(0,0,0,.4)`;
  } else {
    document.querySelector(
      ".header"
    ).style.cssText = `background: none; box-shadow: none`;
  }
}

window.addEventListener("load", resize_menu);
window.addEventListener("scroll", resize_menu);

// Accordian dynamic script
const accordian_header = document.querySelectorAll(".accordian_header");
const accordian_body = document.querySelectorAll(".accordian_body");
const accordian_icon = document.querySelectorAll(".accordian_header span");

for (let index = 0; index < accordian_header.length; index++) {
  accordian_header[index].addEventListener("click", function () {
    for (let j = 0; j < accordian_body.length; j++) {
      if (index == j) {
        accordian_body[j].style.display =
          accordian_body[j].style.display == "block" ? "none" : "block";

        accordian_icon[j].innerHTML =
          accordian_body[j].style.display == "block" ? "-" : "+";
      } else {
        accordian_body[j].style.display = "none";
        accordian_icon[j].innerHTML = "+";
      }
    }
  });
}

console.log(" Ready to start");
