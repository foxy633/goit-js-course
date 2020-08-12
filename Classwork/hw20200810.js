"use strict";

// Array.prototype.method((elem, index, array)=>{
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach((elem, index, array) => {
//   console.log(elem);
//   console.log(index);
//   console.log(array);
// });

// const numbers = [1, 2, 3, 20, 4, -10, 5, 6, 7];
// numbers.forEach((elem) => {
//   if (elem === 3) {
//     return;
//   }
//   console.log(elem);
// });

// const log = (elem) => console.log(elem);
// const multiply = (elem) => elem * 2;

// numbers.forEach(log);

// console.log(numbers.map(multiply));

// console.log(numbers.filter((elem) => elem % 2 === 0));
// console.log(numbers.filter((elem) => elem % 2 !== 0));

// console.log(numbers.find((elem) => elem > 4 && elem % 2 === 0));
// console.log(numbers.every((elem) => elem > 0));
// console.log(numbers.some((elem) => elem < 0));

// console.log(numbers.sort((a, b) => a - b));

// const string = ["AAA", "DDDD", "aaaaaa", "BBBBB", "CCCCCC"];
// console.log(
//   string.sort((str1, str2) => {
//     const cmp1 = str1.toLowerCase();
//     const cmp2 = str2.toLowerCase();
//     if (cmp1 > cmp2) {
//       return 1;
//     } else if (cmp1 < cmp2) {
//       return -1;
//     }
//     return 0;
//   })
// );
// console.log(string.sort());

// const array = [
//   { value: 1, string: "DDDD" },
//   { value: 10, string: "BBBB" },
//   { value: 5, string: "WWWWW" },
//   { value: 1, string: "AAAAA" },
//   { value: 5, string: "AAAA" },
// ];
// console.log(
//   array.sort((obj1, obj2) => {
//     if (obj1.value < obj2.value) {
//       return 1;
//     } else if (obj1.value > obj2.value) {
//       return -1;
//     } else {
//       if (obj1.string < obj2.string) {
//         return 1;
//       } else if (obj1.string > obj2.string) {
//         return -1;
//       }
//       return 0;
//     }
//     // return obj1.value - obj2.value;
//   })
// );

// const numbers = [1, 5, 10, -1, 20];
// numbers.reduce((accumulator, element, index, array) => {
//   console.log(accumulator);
//   console.log(element);
//   console.log(index);
//   console.log(array);
// }, 0);
// const numbers = [1, 5, 10, -1, 20];
// console.log(numbers.reduce((acc, elem) => acc + elem, 0));
// console.log(
//   numbers.reduce((acc, elem, index, array) => {
//     if (index === array.length - 1) {
//       return (acc + elem) / array.length;
//     }
//     return acc + elem;
//   }, 0)
// );

