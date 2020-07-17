"use strict";
//лексическое окружение глобальное
//родитель
//все обьявления
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice2 = function (allProdcuts, productName) {
  //лексическое окружение обьекта/функции/цикло
  //глобал
  //все обьявления
  for (let product of allProdcuts) {
    //лексическое окружение обьекта/функции/цикло
    //calculateTotalPrice2
    //все обьявления
    let key = "name";
    let name = product[key];

    if (product.name === productName) {
      let price = product["price"];
      let quantity = product["quantity"];
      return price * quantity;
    }
  }
};

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let product of allProdcuts) {
    if (product.name === productName) {
      return product["price"] * product["quantity"];
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
