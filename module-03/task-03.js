"use strict";

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  let bestValue = 0;
  for (let value of values) {
    if (bestValue < value) {
      bestValue = value;
    }
  }
  const keys = Object.keys(employees);
  const bestName = [];
  for (let key of keys) {
    let value = employees[key];
    if (value === bestValue) {
      bestName.push(`${key}: ${bestValue}`);
    }
  }
  return bestName.join(", ");
};

const findBestEmployee2 = function (employees) {
  const arrey = Object.entries(employees);
  let bestWork = -Infinity;
  let bestName;
  for (let element of arrey) {
    if (element[1] > bestWork) {
      bestWork = element[1];
      bestName = element[0];
    }
  }
  return bestName;
};

console.log(
  findBestEmployee({
    ann: 99,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
