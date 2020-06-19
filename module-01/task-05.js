"use strict";

const isUserChoice = prompt("Введите страну доставки товара:");
let cost;
switch (isUserChoice.toLowerCase()) {
  case "китай":
    cost = 100;
    break;
  case "чили":
    cost = 250;
    break;
  case "австралия":
    cost = 170;
    break;
  case "индия":
    cost = 80;
    break;
  case "ямайка":
    cost = 120;
    break;
}
if (cost) {
  alert(`Доставка в "${isUserChoice}" будет стоить ${cost} кредитов`);
} else {
  alert(`В вашей стране доставка не доступна`);
}

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
