"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число:");
  if (input === null) {
    break;
  }
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}

// input = prompt("Введите число:");
// while (input !== null) {
//   if (!Number(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(Number.parseInt(input));
//   }
//   input = prompt("Введите число:");
// }

// console.log(numbers);
