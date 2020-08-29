"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#font-size-control");
  const span = document.querySelector("#text");
  input.addEventListener("input", () => {
    span.style.fontSize = `${input.value}px`;
  });
});
