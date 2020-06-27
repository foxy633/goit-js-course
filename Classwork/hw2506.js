"use strict";

// const array = [1, 4, 5, 10, 14];
// const deletedArray = array.splice(2, 2);
// console.log(deletedArray);
// console.log(array);
// array.splice(1, 1, true, false);
// console.log(array);

// console.log(var1);
// var var1 = "string";
// if (true) {
//   var var1 = 10;
//   console.log(var1);
// }
// // for (let i = 0; i < 10; i++) {}
// console.log(var1);
// // console.log(window);

// // console.log(var2);
// let var2 = "string";
// if (true) {
//   var var2 = 10;
//   console.log(var2);
// }
// // for (let i = 0; i < 10; i++) {}
// console.log(var2);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const generateRandomNumber = function (from = 0, to = 100) {
//   //   console.log(from);
//   //   console.log(to);
//   return Math.round(Math.random() * (to - from) + from);
// };

// const hello = function (age, name = "user") {
//   //   console.log("Hello", name);
//   return;
// };
// console.log(hello());

// // console.log(generateRandomNumber());
// // console.log(generateRandomNumber(1, 3));
// // console.log(generateRandomNumber(4, 7));

// const getSum = function () {
//   let total = 0;
//   const array = [...arguments];
//   //   const array = Array.from(arguments);
//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };
// console.log(getSum(10, 2, 3, 4, 5, 6, 7));
// console.log(getSum(10, 2, 3, 4));

// const isPasswordValid = function (password) {
//   if (password.length === 0) {
//     // console.log("Пароль пустой");
//     return "Пароль пустой";
//   }
//   if (password.length < 8) {
//     // console.log("Недостаточная длоина строки");
//     return "Недостаточная длина строки";
//   }
//   return "Пароль валидный";
// };
// console.log(isPasswordValid(""));
// console.log(isPasswordValid("dafd"));
// console.log(isPasswordValid("asfsegjhbdgfjh"));

// helloWorld();
// function helloWorld() {
//   console.log("Hello world");
// }

const sum1 = function (a, b, c) {
  return a + b + c;
};
const sum2 = (a, b, c) => a + b + c;

const sum3 = function (a, b, c) {
  if (a === b) {
    //
  }
  return a + b + c;
};
const sum4 = (a, b, c) => {
  if (a === b) {
    //
  }
  return a + b + c;
};
const sum = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};
