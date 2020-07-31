"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4, test: false },
  { name: "Сканер", price: 2700, quantity: 3, test: false },
  { name: "Дроид", price: 400, quantity: 7, test: false },
  { name: "Захват", price: 1200, quantity: 2, test: false },
];

const getAllPropValues2 = function (arr, prop) {
  let array = [];
  let key = prop;
  for (let obj of arr) {
    let value = obj[key]; //ЗНАЧЕНИЕ ЧЛЮЧА (ЗНАЧЕНИЕ/АНДЕФАЙНД)
    if (value) {
      //TRUE/FALSE()
      array.push(value);
    }
  }
  return array;
};

const getAllPropValues1 = function (arr, prop) {
  let array = [];
  let key = prop;
  for (let obj of arr) {
    if (obj[key] !== undefined) {
      array.push(obj[key]);
    }
  }
  return array;
};

const getAllPropValues = function (arr, prop) {
  let array = [];
  for (let obj of arr) {
    if (prop in obj) {
      array.push(obj[prop]);
    }
  }
  return array;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

console.log(getAllPropValues(products, "test")); // []
