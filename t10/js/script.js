let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

btnNext.addEventListener("click", function () {
    if (viewSlide < 3) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    slider.style.left = -viewSlide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 3;
    }
    slider.style.left = -viewSlide * viewport + "px";
});