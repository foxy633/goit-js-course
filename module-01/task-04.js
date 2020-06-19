"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

message = prompt("Какое количество дроидов Вы хотите купить?");
if (message === null) {
  console.log("Отменено пользователем!");
} else if (!Number(message)) {
  console.log("Вы ввели не число!");
} else {
  totalPrice = message * pricePerDroid;
  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${message} число дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
