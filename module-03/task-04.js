"use strict";

const countTotalSalary = function (employees) {
  let total = 0;
  for (const key in employees) {
    total += employees[key];
  }
  return total;
  // return Object.values(employees).reduce((accumulator, currentValue) => accumulator + currentValue, 0); изучить..////
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
