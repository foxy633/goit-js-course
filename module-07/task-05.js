"use strict";
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("#name-input");
  const outputElement = document.querySelector("#name-output");

  inputElement.addEventListener("input", function () {
    if (inputElement.value === "") {
      outputElement.innerText = "Незнакомец";
    } else {
      outputElement.innerText = inputElement.value;
    }
  });
});
