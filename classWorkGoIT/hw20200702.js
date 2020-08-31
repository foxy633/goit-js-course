"use strict";

// const object = {
//   key1: 10,
//   key2: "string",
//   key3: true,
//   someNewKey: "string2",
// };

// for (const key in object) {
//   console.log(key);
//   console.log(object[key]);
// }

// const keys = Object.keys(object);
// const values = Object.values(object);
// const entries = Object.entries(object);

// console.log(keys);
// console.log(values);
// console.log(entries);

// const goods = {
//   apples: 10,
//   tomatos: 15,
//   potatos: 20,
//   bananas: 30,
// };

// let total = 0;
// const prices = Object.values(goods);

// for (const price of prices) {
//   total += price;
// }
// console.log(total);

// const entries = Object.entries(goods);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(key);
//   console.log(value);
// }
////////////////////////////

//SPRAt оператор//

// const array1 = [1, 2, 3, 4];
// const array2 = [-1, 0, ...array1];
// const array3 = [...array1, 4, 5, 6, ...array2, 9];

// console.log(array2);
// console.log(array3);

// const object1 = {
//   a: 1,
//   b: 2,
// };
// const object2 = {
//   ...object1,
//   c: 3,
//   a: 10,
// };

// const object3 = { ...object1 };
// const object4 = Object.assign({}, object1, object2);
// const object5 = {
//   ...object1,
//   ...object2,
// };

// console.log(object3);

//////////////////////////////////

// const array = [1, 12312, 54654, -100, 4356];
// const min = Math.min(...array);
// const max = Math.max(...array);

// console.log(min);
// console.log(max);

/////////////////////////////////

//RESt оператор//

// const getSum = (...params) => {

//   console.log(params);
// };
// getSum(1, 2, 3, 4);

// const getSum = (a, b, ...params) => {
//   console.log(a + b);
//   //   console.log(b);
//   console.log(params);
// };

// getSum(1, 2, 3, 4);

////////////////////////////////

//ДИСtРУКЬОРИЗАЦИЯ Обьектов//
// const someLongObjectName = {
//   name: "Name",
//   age: 12,
//   isSmoking: false,
// };

// const someLongObjectName1 = {
//   name: "Uhu",
//   age: 14,
//   isSmoking: false,
//   key2{
//       someLongKey: "String",
//   }
// };

// // const birthdayext =`Дорогой ${someLongObjectName.name}! Тебе  уже ${someLongObjectName.age} лет. `

// const { name, age } = someLongObjectName;
// const { name: secondName, age: secondAge } = someLongObjectName1;

// const birthdaDext = `Дорогой ${name}! Тебе  уже ${age} лет. `;
// const birthdaDext2 = `Дорогой ${secondName}! Тебе  уже ${secondAge} лет. `;

// console.log(birthdaDext);
// console.log(birthdaDext2);

////////////////////////
//ДИСtРУКЬОРИЗАЦИЯ Масивов//

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const [num1, , , num4, ...others] = array;

// console.log(num1);
// console.log(num4);
// console.log(others);
// console.log(...others);

// let a = 1;
// let b = 2;

// [b, a] = [a, b];

// console.log(a);
// console.log(b);

// const home = {
//   key1: "String",
//   room1: {
//     chair: true,
//     bookcase: {
//       shelf: 4,
//     },
//   },
// };

// const house1 = {
//   ...house,
// };
// house.key1 = "AHHAHAAA";
// house1.room1.bookcase.shelf = 10;
// console.log("HOUSE:", house.room1.bookcase.shelf);
// console.log("HOUSE2:", house1.room1.bookcase.shelf);

