"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
document.addEventListener("DOMContentLoaded", () => {
  let counterValue = 0;
  const counterSpan = document.querySelector("#value");
  const counterButtonsIncrement = document.querySelector(
    "#counter > [data-action=increment]"
  );
  const counterButtonsDecrement = document.querySelector(
    "#counter > [data-action=decrement]"
  );

  function increment() {
    counterSpan.textContent = ++counterValue;
  }
  function decrement() {
    counterSpan.textContent = --counterValue;
  }
  counterButtonsIncrement.addEventListener("click", increment);
  counterButtonsDecrement.addEventListener("click", decrement);
});
