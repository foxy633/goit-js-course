"use strict";

let password = prompt("Введите пароль:", "");
let tryCount = 1;
let symbols = "@_!?:-%*";

do {
  tryCount += 1;

  if (!password) {
    password = prompt("Пароль не должен быть пустым");
    continue;
  }

  if (password.length < 8) {
    password = prompt("Длина пароля меньше 8 символов");
    continue;
  }

  let isUpperCase = false;
  let isSymbol = false;
  let isNumber = false;
  for (let i = 0; i < password.length; i += 1) {
    let character = password.charAt(i);
    let newChar = character.toLowerCase();
    if (character !== newChar) {
      isUpperCase = true;
    }

    if (symbols.indexOf(character) !== -1) {
      isSymbol = true;
    }

    if (Number(character)) {
      isNumber = true;
    }
  }

  if (!isUpperCase) {
    password = prompt("Пароль введен без заглавной буквы.");
    continue;
  }
  if (!isSymbol) {
    password = prompt("Пароль введен без единого символа");
    continue;
  }
  if (!isNumber) {
    password = prompt("Пароль введен без единой цифры");
    continue;
  }

  if (password && password.length >= 8 && isNumber && isSymbol && isUpperCase) {
    alert("Добро пожаловать");
    break;
  }
} while (tryCount < 5);

if (tryCount >= 5) {
  alert("Доступ запрещен после 5 попыток");
}
