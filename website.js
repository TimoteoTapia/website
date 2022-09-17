var time;

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.margin = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function StartInterval() {
  time = setInterval(function () {
    Next();
  }, 5000);
}

function PauseInterval() {
  clearInterval(time);
}

StartInterval();

btnRight.addEventListener("click", function () {
  PauseInterval(); //esto se lo puse porque cuando se daba click el intervalo interrumpia
  Next();
  StartInterval();
});

btnLeft.addEventListener("click", function () {
  PauseInterval();
  Prev();
  StartInterval();
});

const btnMenu = document.querySelector("#btnMenu");
const mainNav = document.querySelector("#main-nav");
btnMenu.addEventListener("click", function () {
  mainNav.classList.toggle("mostrar"); //quita y muestra la clase al dar click
});
