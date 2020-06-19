"use strict";

let input;
let total = 0;
let temp;
do {
  input = prompt("Введите число:");
  temp = Number.parseInt(input);
  if (temp) {
    total = temp + total;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
