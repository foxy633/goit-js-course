"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userInput;
userInput = prompt("Введите пароль:");
if (userInput === null) {
  message = "Отменено пользователем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
