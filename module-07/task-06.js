"use strict";
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#validation-input");

  input.addEventListener("blur", () => {
    if (+input.dataset.length === input.value.length) {
      if (input.classList.contains("invalid")) {
        input.classList.remove("invalid");
      }
      input.classList.add("valid");
    } else {
      if (input.classList.contains("valid")) {
        input.classList.remove("valid");
      }
      input.classList.add("invalid");
    }
  });
});
