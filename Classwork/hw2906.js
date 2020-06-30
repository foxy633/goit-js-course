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

const students = [];
for (let i = 0; i < 20; i++) {
  const student = {
    // id: 1,
    name: `USER-${i + 1}`,
    sayHello: function () {
      console.log(`Hello, ${this.name}`);
    },
  };

  //   delete students[i].name;
  //   console.log(students[i]);
  students[i] = student;
}
delete students[1].name;
delete students[5].name;

for (let i = 0; i < 20; i++) {
  students[i].sayHello();
}
