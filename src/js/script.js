"use strict";
window.addEventListener("DOMContentLoaded", () => {
  // Показ бургера
  function showBurger() {
    let burgerWrap = document.querySelector(".navbar__burger-menu-wrapper"),
      burgerBtn = document.querySelector(".navbar__burger-menu"),
      burgerContent = document.querySelector(".burger-content");

    burgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      burgerBtn.classList.toggle("open");
      burgerContent.classList.toggle("show");
    });
  }

  // Получение фильмов из JSON

  // Вставка топ-10

  //   Вызов функций
  showBurger();

  class Movie {}
});
