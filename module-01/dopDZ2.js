"use strict";
debugger;
let number = Number.parseInt(Math.random() * 99) + 1; // 0..100

let clientNumber = Number.parseInt(prompt("Угадайте число от 1 до 100"));

// qvest = false; //флаг опущен
// do {
//   if (clientNumber < number) {
//     clientNumber = Number.parseInt(prompt("Число больше"));
//   } else {
//     qvest = true; //поднимаем флаг
//   }
// } while (qvest); // проверка состояния флага

while (true) {
  if (clientNumber < number) {
    clientNumber = Number.parseInt(prompt("Число больше"));
  } else if (clientNumber > number) {
    clientNumber = Number.parseInt(prompt("Число меньше"));
  } else if (clientNumber === number) {
    alert("Вы угадали! Поздравляем!");
    break;
  } else {
    clientNumber = Number.parseInt(prompt("Вы ввели не число"));
  }
}
