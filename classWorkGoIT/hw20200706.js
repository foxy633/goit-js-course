"use strict";

// const foo2 = (a, b) => {
//   throw new Error();
//   return a + b;
//   debugger;
// };
// const foo1 = () => {
//   const sum = foo2(1, 10);
//   console.log("Hooray:", sum);
//   return sum;
// };
// foo1();

//////////////////

// const N = 10;
// for (let i = 0; i < N; i++) {
//   console.log(i);
// }
// const reapitLog = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// };
// reapitLog(10);
// reapitLog(5);

////////////////////

// const fruit = [
//   {
//     name: "apples",
//     amount: 10,
//     isFresh: true,
//   },
//   {
//     name: "bananas",
//     amount: 30,
//     isFresh: false,
//   },
//   {
//     name: "pineapples",
//     amount: 5,
//     isFresh: true,
//   },
// ];
// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (const element of array) {
//     const actionResult = callback(element);
//     if (actionResult) {
//       filteredArray.push(element);
//     }
//   }
//   return filteredArray;
// };
// const isFruitFresh = (fruit) => {
//   return fruit.isFresh;
// };
// const isEnoghtAmount = (fruit) => {
//   const MIN_FRUIT_AMOUNT = 7;
//   return fruit.amount > MIN_FRUIT_AMOUNT;
// };
// const freshFruits = filter(fruit, isFruitFresh);
// const enoghtAmountFruits = filter(fruit, isEnoghtAmount);
// console.log("FRESH FRUIS:", freshFruits);
// console.log("ENOUGH AMOUNT FRUITS:", enoghtAmountFruits);

///////////////////////////////////////////

// const showUppercased = (value) => console.log(value.toUpperCase());
// const showLowercased = (value) => console.log(value.toLowerCase());
// const showInDifferentCase = (value) => {
//   let result = "";
//   for (let i = 0; i < value.length; i++) {
//     // result += i % 2 === 0 ? value[i].toLowerCase() : value[i].toUpperCase();
//     if (i % 2 === 0) {
//       result += value[i].toLowerCase();
//     } else {
//       result += value[i].toUpperCase;
//     }
//   }
//   console.log(result);
// };

// const log = (array, logFuction) => {
//   for (const element of array) {
//     logFuction(element);
//   }
// };

// const string = ["String1", "STring2", "StRinG3"];
// log(string, showLowercased);
// log(string, showUppercased);
// log(string, showInDifferentCase);

//////////////////////////////////////////////////

// const foo1 = () => console.log("Foo1");
// const foo2 = () => console.log("Foo2");
// const foo3 = () => {
//   foo2();
//   console.log("Foo3");
//   foo1();
// };
// const foo4 = () => foo3();
// foo4();

/////////////////////////

