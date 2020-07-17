"use strict";
// let array = [];
// console.log(array);

// let animal = {
//   name: "Pirat",
// };
// let dog = {
//   breed: "None",
// };
// dog.__proto__ = animal;
// console.log(dog.breed);
// console.log(dog.name);

/////////////////////////////////////

// const object1 = {
//   key1: "1",
//   key2: "2",
// };
// // const object2 = {
// //   key3: "3",
// //   key4: "4",
// // };
// const object2 = Object.create(object1);
// object2.key3 = "3";
// object2.key4 = "4";

// console.log(Object.getPrototypeOf(object1) === Object.prototype);
// console.log(Object.getPrototypeOf(object2));

// // object2.__proto__ = object1;
// // object2.key1;
// for (const key in object2) {
//   if (!object2.hasOwnProperty(key)) {
//     continue;
//   }
//   console.log(key);
// }

// const keys = Object.keys(object2);
// for (const key of keys) {
//   console.log(key);
// }

////////////////////////////////////////////////////

// function Animal(type) {
//   this.type = type;
// }

// const animal1 = new Animal("tiger")
// const animal2 =  new Animal("wolf")
// // const animal = new Animal("tiger");
// // console.log(animal);
// // console.log(Animal.prototype === animal.__proto__);
// //дописать......

////////////////////////////////////////////////////

