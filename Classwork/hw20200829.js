// "user strict";
// console.log([1, 2, 3, 4]);

const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue("Hellow world"));

console.log(validator.isEmail("abc@gmail.com"));
console.log(validator.isEmail("abcgmail"));
