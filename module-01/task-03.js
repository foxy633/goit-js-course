"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

userInput = prompt("Введите пароль:");
if (!userInput) {
  message = "Отменено пользователем!";
} else if (userInput.toLowerCase() === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
