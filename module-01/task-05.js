"use strict";

const China = "Китай";
const costChina = 100;
const Chile = "Чили";
const costChile = 250;
const Australia = "Австралия";
const costAustralia = 170;
const India = "Индия";
const costIndia = 80;
const Jamaika = "Ямайка";
const costJamaica = 120;
const UserChoice = prompt("Введите страну доставки товара:");

if (UserChoice === null) {
  alert("Отмена пользователем");
} else {
  switch (UserChoice.toLowerCase()) {
    case China.toLowerCase():
      console.log(`Доставка в "${China}" будет стоить "${costChina}" кредитов`);
      break;
    case Chile.toLowerCase():
      console.log(`Доставка в "${Chile}" будет стоить "${costChile}" кредитов`);
      break;
    case Australia.toLowerCase():
      console.log(
        `Доставка в "${Australia}" будет стоить "${costAustralia}" кредитов`
      );
      break;
    case India.toLowerCase():
      console.log(`Доставка в "${India}" будет стоить "${costIndia}" кредитов`);
      break;
    case Jamaika.toLowerCase():
      console.log(
        `Доставка в "${Jamaika}" будет стоить "${costJamaica}" кредитов`
      );
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}

// const isUserChoice = prompt("Введите страну доставки товара:");
// if (isUserChoice === null) {
//   alert("Отмена пользователем");
// } else {
//   let cost;
//   switch (isUserChoice.toLowerCase()) {
//     case "китай":
//       cost = 100;
//       break;
//     case "чили":
//       cost = 250;
//       break;
//     case "австралия":
//       cost = 170;
//       break;
//     case "индия":
//       cost = 80;
//       break;
//     case "ямайка":
//       cost = 120;
//       break;
//   }
//   if (cost) {
//     alert(`Доставка в "${isUserChoice}" будет стоить ${cost} кредитов`);
//   } else {
//     alert(`В вашей стране доставка не доступна`);
//   }
// }

// const isChina = "Китай";
// const isChile = "Чили";
// const isAustralia = "Австралия";
// const isIndia = "Индиа";
// const isJamaika = "Ямайка";
// const isUserChoice = prompt("Введите страну доставки товара:");

// if (!isUserChoice) {
//   alert("Отмена пользователем");
// } else if (isUserChoice.toLowerCase() === isChina.toLowerCase()) {
//   alert(`Доставка в "${isChina}" будет стоить 100 кредитов`);
// } else if (isUserChoice.toLowerCase() === isChile.toLowerCase()) {
//   alert(`Доставка в "${isChile}" будет стоить 250 кредитов`);
// } else if (isUserChoice.toLowerCase() === isAustralia.toLowerCase()) {
//   alert(`Доставка в "${isAustralia}" будет стоить 170 кредитов`);
// } else if (isUserChoice.toLowerCase() === isIndia.toLowerCase()) {
//   alert(`Доставка в "${isIndia}" будет стоить 80 кредитов`);
// } else if (isUserChoice.toLowerCase() === isJamaika.toLowerCase()) {
//   alert(`Доставка в "${isJamaika}" будет стоить 120 кредитов`);
// } else {
//   alert(`В вашей стране доставка не доступна`);
// }

// switch (isUserChoice.toLowerCase()) {
//   case isChina.toLowerCase():
//     alert(`Доставка в "${isChina}" будет стоить 100 кредитов`);
//     break;
//   case isChile.toLowerCase():
//     alert(`Доставка в "${isChile}" будет стоить 250 кредитов`);
//     break;
//   case isAustralia.toLowerCase():
//     alert(`Доставка в "${isAustralia}" будет стоить 170 кредитов`);
//     break;
//   case isIndia.toLowerCase():
//     alert(`Доставка в "${isIndia}" будет стоить 80 кредитов`);
//     break;
//   case isJamaika.toLowerCase():
//     alert(`Доставка в "${isJamaika}" будет стоить 120 кредитов`);
//     break;
//   default:
//     alert(`В вашей стране доставка не доступна`);
// }
