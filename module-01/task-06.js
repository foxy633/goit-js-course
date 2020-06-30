"use strict";

let input;
let total = 0;
let temp;
do {
  input = prompt("Введите число:");
  if (input === null) {
    alert("Отменено пользователем");
    break;
  }
  temp = Number.parseInt(input);
  if (temp) {
    total = temp + total;
  } else {
    alert("Вы ввели не число!");
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
