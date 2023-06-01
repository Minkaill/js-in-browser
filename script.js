import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const breakpoint = window.matchMedia("(min-width:768px)");
let mySwiper;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    document.querySelector(".swiper").classList.remove("swiper");
    document
      .querySelector(".swiper-wrapper")
      .classList.remove("swiper-wrapper");
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    a11y: true,
    keyboardControl: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    paginationClickable: true,
  });
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();

// ----------------------------------------------- >>>

function showMoreOn() {
  let btn = document.querySelector(".btn");
  let itemsBlock = document.querySelector(".content__wrapper");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "auto";
    checkHeightForEnabledShow();
  });
}

function showMoreOff() {
  let btn = document.querySelector(".btn");
  let itemsBlock = document.querySelector(".content__wrapper");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "185px";
    checkHeightForDisabledShow();
  });
}

function checkHeightForDisabledShow() {
  let btn = document.querySelector(".btn");
  let itemsBlock = document.querySelector(".content__wrapper");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight === 185) {
    btn.textContent = "Показать все";
    showMoreOn();
  }
}

checkHeightForDisabledShow();

function checkHeightForEnabledShow() {
  let btn = document.querySelector(".btn");
  let itemsBlock = document.querySelector(".content__wrapper");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight !== 185) {
    btn.textContent = "Скрыть все";
    showMoreOff();
  }
}

checkHeightForEnabledShow();
