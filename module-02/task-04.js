"use strict";

const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    let formattedString = "";
    for (let i = 0; i < 40; i += 1) {
      let character = string.charAt(i);
      formattedString += character;
    }
    formattedString += "...";

    return formattedString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
