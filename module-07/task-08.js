"use strict";

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
document.addEventListener("DOMContentLoaded", () => {
  const startDivWidth = 30;
  const startDivHeight = 30;
  const interval = 10;
  function createBoxes(amount) {
    const boxesDiv = document.querySelector("#boxes");
    boxesDiv.innerHTML = "";
    if (amount && amount > 0) {
      for (let i = 0; i < amount; i++) {
        const divElement = document.createElement("div");
        divElement.style.height = startDivHeight + i * interval + "px";
        divElement.style.width = startDivWidth + i * interval + "px";
        divElement.style.backgroundColor =
          "#" + Math.floor(Math.random() * 256 * 256 * 256 - 1).toString(16);
        boxesDiv.appendChild(divElement);
      }
    }
  }
  function destroyBoxes() {
    createBoxes(0);
  }
  const renderBuuton = document.querySelector('[data-action="render"]');
  renderBuuton.addEventListener("click", function () {
    let inputElement = document.querySelector("#controls > input");
    createBoxes(inputElement.value);
  });
  const destroyButton = document.querySelector('[data-action="destroy"]');
  destroyButton.addEventListener("click", destroyBoxes);
});
