let menuBtn = document.getElementsByClassName("menu-btn")[0];


menuBtn.addEventListener("click", function(event) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuBtn.classList.toggle("change");

});