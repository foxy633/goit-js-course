// "use strict";

// const x = 0;
// function foo() {
//   const x = 1;
//   console.log(x);
// }
// foo();

/////////////////////////////////////

// const counter = createCounter();
// counter();
// counter();

///////////////////////////////////////

// function createCounter() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

/////////////////////////////////////////////

// const guessPassword = () => {
//   let secretPassword = "GFCDHHG123";
//   return function () {
//     return {
//       check(password) {
//         return password === secretPassword;
//       },
//       updatePassword(newPassword) {
//         secretPassword = newPassword;
//       },
//     };
//   };
// };
// const game = guessPassword();
// console.log(game().check("1234"));
// game().updatePassword("password");
// console.log(game().check("password"));

////////////////////////////////////////////////

// const createUser = function (name, birthey) {
//   let hasBirtheyMessageBeenShown = false;
//   return function (message, date) {
//     if (!hasBirtheyMessageBeenShown && date === birthey) {
//       console.log(`Поздравляем с днем рождения! ${name}`);
//       hasBirtheyMessageBeenShown = true;
//     }

//     console.log(`${name}: ${message}`);
//   };
// };

// const messageWithUser1 = createUser("Username", "01/01/2020");
// messageWithUser1("Привет, мир!", "01/01/2020");
// messageWithUser1("Как дела?", "01/01/2020");

/////////////////////////////////////////////////////

// function foo() {
//   "use strict";
//   console.log(this);
// }
// foo();
// console.log(this);
// const object = {
//   a: 1,
//   b: 2,
//   foo() {
//     console.log(this);
//   },
//   object1: {
//     a: 3,
//     b: 4,
//     foo() {
//       console.log(this);
//     },
//   },
//   foo1: function () {
//     console.log(this);
//   },
//   foo2: () => {
//     console.log(this);
//   },
// };
// object.foo();
// object.foo1();
// object.foo2();
// object.object1.foo();

//////////////////////////////////////////////

// function showName(message, number) {
//   console.log("NAME:", this.name);
//   console.log(message);
//   console.log(number);
// }

// var name = "Global";
// const fabric1 = {
//   people: 10,
//   name: "Fabric1",
// };
// const fabric2 = {
//   people: 20,
//   name: "Fabric2",
// };
// const fabric3 = {
//   people: 30,
//   name: "Fabric3",
// };

// showName();

// // showName.call(fabric3, "Message 3", 10);
// // showName.call(fabric2, "Message 2", 20);
// // showName.call(fabric1, "Message 1", 30);

// // showName.apply(fabric3, ["Message 3", 40]);
// // showName.apply(fabric2, ["Message 2", 50]);
// // showName.apply(fabric1, ["Message 1", 60]);

// const showFabric3Name = showName.bind(fabric3);
// showFabric3Name("Message", 100);
// showFabric3Name("Message1", 200);

///////////////////////////////////////////////////////

const showtExt = function (showeAction) {
  showeAction();
};
const object = {
  fullname: "Username",
  city: "Kharkiv",
  showUserInfo: function () {
    console.log(`${this.fullname} from ${this.city}`);
  },
};
showtExt(object.showUserInfo.bind(object));

const helloWord = (message) => {
  console.log(message);
};
helloWord.call(null, "Hello");
