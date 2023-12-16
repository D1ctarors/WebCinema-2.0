"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //! Показ бургера
  function showBurger() {
    let burgerBtn = document.querySelector(".navbar__burger-menu"),
      burgerContent = document.querySelector(".burger-content"),
      isMouseOverBurger = false;

    // При наведении на кнопку бургера
    burgerBtn.addEventListener("mouseenter", () => {
      isMouseOverBurger = true;
      burgerBtn.classList.add("open");
      burgerContent.classList.add("show");
    });

    // При уходе мыши из видимости бургер контента
    burgerContent.addEventListener("mouseleave", () => {
      isMouseOverBurger = false;
      burgerBtn.classList.remove("open");
      burgerContent.classList.remove("show");
    });

    // При уходе мыши из видимости кнопки бургера
    burgerBtn.addEventListener("mouseleave", () => {
      if (!isMouseOverBurger) {
        burgerBtn.classList.remove("open");
        burgerContent.classList.remove("show");
      }
    });
  }

  //! Создание блока с фильмом
  function createElement(data) {
    return `
    <a href="/film/${data.id}" class="col-2 slider__slide swiper-slide slide d-block mb-auto">
      <div class="slide__content ">
        <div class="slide__header ">
          <div class="slide__title">${data.fields.title}</div>
          <div class="raitings">
            <div class="raitings__kp">kp: ${data.fields.raitings_kp}</div>
            <div class="raitings__imdb">imdb: ${data.fields.raitings_imdb}</div>
          </div>
        </div>
      </div>
      <img src="${data.fields.poster_big}" alt="">
    </a>
  `;
  }

  //! Вставка фильмов из БД на страницу
  function insertBlock(sliderWrap, movieBlock) {
    sliderWrap.innerHTML += movieBlock;
  }

  //! Получение данных из БД
  function getData() {
    let request = new XMLHttpRequest(),
      sliderWrap = document.querySelector("#incinema-slider-wrapper");

    request.open("GET", "/src/js/data.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status == 200) {
        let data = JSON.parse(this.response);

        //! Вставка в html
        for (let i = 0; i < data.length; i++) {
          let movieBlock = createElement(data[i]);
          insertBlock(sliderWrap, movieBlock);
        }
        //! /Вставка в html
      } else {
        // console.log("Ошибка получения данных");
      }
    });
  }

  //? Вызов функций
  showBurger();
  getData();
});
