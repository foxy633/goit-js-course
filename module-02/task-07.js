"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.lenght >= 4 && login.lenght <= 16;
  // if (login.length >= 4 && login.length <= 16) {
  //   return true;
  // } else {
  //   return false;
  // }
};

const isLoginUnique = function (allLiogins, login) {
  return !allLiogins.includes(login);
  // for (let UserLogin of allLiogins) {
  //   if (UserLogin === login) {
  //     return false;
  //   }
  // }
  // return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  }
  allLogins.push(login);
  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "Ajax")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
