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

class Stack {
  constructor(...elements) {
    this._elements = [...elements];
  }
  //добовляем элемент в конец массива
  push(elem) {
    this._elements.push(elem);
  }
  //удаляем элемент с конца массива
  pop() {
    this._elements.pop();
  }
  //геттер, который возвращает длину массива
  get lenght() {
    return this._elements.length;
  }
  //вставка элемента в произвольную позицию
  insertAt(index, elem) {}
  //удаление элемента из произвольной позиции
  deleteAt(index) {
    this._elements.splice(index, 1);
  }
  //поиск элемента в массиве. тру или фолс
  has(elem) {
    return this._elements.indexOf(elem) !== -1;
    // return this._elements.includes(elem);
  }
  //выводит в консоль наш стек
  log() {
    console.log(this._elements);
  }
}
const stack = new Stack();

stack.push(2);
stack.push(3);
stack.log();

stack.insertAt(0, 100);
stack.push(200);
stack.log();

console.log(stack.lenght);

console.log(stack.has(100));
console.log(stack.has(300));

stack.pop();
stack.log();

stack.deleteAt(1);
console.log(stack.has(2));
stack.log();
