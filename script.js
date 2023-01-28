const hamburger = document.querySelector("#hamburger");
console.log(hamburger);
const hiddenMenu = document.querySelector(".hidden-menu");
let isHidden = 1;
hamburger.addEventListener("click", function () {
  console.log(hiddenMenu);
  if (isHidden) {
    hiddenMenu.style.display = "block";
    isHidden = 0;
  } else {
    hiddenMenu.style.display = "none";
    isHidden = 1;
  }
});
