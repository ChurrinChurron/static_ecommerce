let buttonMob = document.querySelector(".menu__searchMob ");
let searchMob = document.querySelector(".searchMob__box");

buttonMob.addEventListener("click", () => {

    searchMob.classList.toggle("open");
})