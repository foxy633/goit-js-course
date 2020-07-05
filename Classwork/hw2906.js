"use strict";

// const goItCobrse = {
//   courseName: "Frontend",
//   numberOfPeople: 15,
//   topics: ["Arrays", "Functions", "Numbers"],
//   getInfo: () => {
//     console.log("Hello dear student");
//   },
//   officeAvaible: false,
// };

// console.log(goItCobrse["courseName"]);
// console.log(goItCobrse["numberOfPeople"]);
// console.log(goItCobrse.officeAvaible);
// goItCobrse.getInfo();

// goItCobrse.isFirstLesson = "";
// goItCobrse["maxMark"] = function () {};
// console.log(goItCobrse);

// console.log(goItCobrse.sunneWeather);
// console.log(goItCobrse);

//////////

// const getRandomNumbers = (from, to) => {
//   return Math.round(Math.random() * (to - from) + from);
// };

// const getRandomStudent = () => {
//   const availableNames = ["Petya", "Vasya", "Andrey", "Petr"];
//   const availableSenames = ["Sidorov", "Petrov", "Pupkin", "Semenov"];

//   const fIndex = getRandomNumbers(0, 3);
//   const sIndex = getRandomNumbers(0, 3);

//   const fname = availableNames[fIndex];
//   const sname = availableSenames[sIndex];

//   const id = getRandomNumbers(1, 100000);
//   const fullname = `${fname} ${sname}`;

//   return id + " " + fullname;

//   //   return {
//   //     fullname,
//   //     id,

//   //     // fullname: `${fname} ${sname}`,
//   //     // id: getRandomNumbers(1, 100000),
//   //   };
// };
// const studens = [];
// for (let i = 0; i < 20; i++) {
//   studens.push(getRandomStudent());
//   console.log(`SUDENt ${studens[i]}`);
// }

/////////////

// const student = {
//   age: 18,
//   university: "NURE",
//   fullname: "Anastasiya teslenko",
//   getInfo: () => {
//     console.log("СТУДНТ:", student.fullname);
//     console.log("ВОЗРОСТ:", student.age);
//     console.log("УНИВеР:", student.university);
//   },
// };

// const getRandomNumbers = (from, to) => {
//   return Math.round(Math.random() * (to - from) + from);
// };

// const getRandomStudent = () => {
//   const availableNames = ["Petya", "Vasya", "Andrey", "Petr"];
//   const availableSenames = ["Sidorov", "Petrov", "Pupkin", "Semenov"];

//   const fIndex = getRandomNumbers(0, 3);
//   const sIndex = getRandomNumbers(0, 3);

//   const fname = availableNames[fIndex];
//   const sname = availableSenames[sIndex];

//   const id = getRandomNumbers(1, 100000);
//   const fullname = `${fname} ${sname}`;
//   return {
//     fullname,
//     id,
//     getInfo: function () {
//       console.log("СТУДНТ:", this.fullname);
//       console.log("ID:", this.id);
//     },
//   };

//   // return id + " " + fullname;

//   //   return {
//   //     fullname,
//   //     id,

//   //     // fullname: `${fname} ${sname}`,
//   //     // id: getRandomNumbers(1, 100000),
//   //   };
// };

// // return {
// //   fullname,
// //   id,
// //   getInfo: () => {
// //     console.log("СТУДНТ:", student.fullname);
// //     console.log("ID:", student.id);
// //   },
// // };

// // student.getInfo();

// const students = [];

// for (let i = 0; i < 20; i++) {
//   students.push(getRandomStudent());
// }

// for (let i = 0; i < 20; i++) {
//   students[i].getInfo();
// }

///////////////

// const students = [];
// for (let i = 0; i < 20; i++) {
//   // const student = {
//   students[i] = {
//     id: 1,
//     name: `USER-${i + 1}`,
//     sayHello: function () {
//       console.log(`Hello, ${this.name}`);
//     },
//   };

//   delete students[i].name;
//   console.log(students[i]);
//   // students[i] = student;
// }
// // delete students[1].name;
// // delete students[5].name;

// for (let i = 0; i < 20; i++) {
//   students[i].sayHello();
// }

///////////////////////////////////////////
/////////REPEtA///////////
//////////////////////////////////////////

// // Базовые конструкторы/////
// Object
// String
// Number
// Array
// //////////////////////////

// const hotel = {
//   name: "Sanset Resort",
//   stars: 5,
//   capacity: 200,
// };
// console.log(hotel);
// console.log(hotel.name);
// console.log(hotel["name"]);

// const key = "stars";
// console.log(hotel[key]);

// hotel.stars = 3;
// hotel.gest = [];
// console.log(hotel);

/////////////////////////////////////////////

// const a = { x: 1, y: 2 };
// const b = a;
// console.log(b === a);

// const arr = ["a", "b", "c"];
// console.log(arr);
// arr.hello = ";)";
// console.log(arr);

// const fn = function () {};
// fn.hello = "xD";
// console.log(fn.hello);

/////////////////////////////////////////////

// const hotel = {
//   name: "Sanset Resort",
//   stars: 5,
//   capacity: 200,
//   updateName(newName) {
//     console.log(this.name);
//     this.someMethod();
//     this.name = newName;
//   },
//   someMethod() {
//     console.log("Hello from someMetod");
//   },
//   ///Старый метод///
//   // updateName: function (newName) {
//   //   console.log(this.name);
//   //   this.name = newName;
//   // },
// };
// console.log(hotel);
// hotel.updateName("Laguna");
// console.log(hotel);
// // hotel.someMethod();

// // const updateHoteName = function (hotel, newName) {
// //   hotel.name = newName;
// // };
// // updateHoteName(hotel, "Laguna");
// // console.log(hotel);

//////////////////////////////////////////////////////

///////старый метод перебора//////

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// // console.log("good" in feedback);
// // console.log("efhgf" in feedback);

// for (const key in feedback) {
//   console.log(key);
//   // console.log(feedback.key); не найдет такого обьекта нет в feedback!!!
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log("total:", totalFeedback);

///////////Новый методы////////////

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// // Object.keys ////////////
// const key = Object.keys(feedback);
// console.log(key);
// console.log(key.length);
// let totalFeedback = 0;
// for (const onekey of key) {
//   console.log(onekey);
//   console.log(feedback[onekey]);
//   totalFeedback += feedback[onekey];
// }
// console.log("total:", totalFeedback);

// // Object.values//Масив всех значений////////
// const values = Object.values(feedback);
// console.log(values);

// let totalFeedback = 0;
// for (const value of values) {
//   console.log(value);
//   totalFeedback += value;
// }
// console.log("total:", totalFeedback);

// Object.entries//Получает масив масивов////
console.log(Object.entries(feedback));
