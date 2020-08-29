"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];

  const ingredientsElement = document.querySelector("#ingredients");
  const items = [];
  ingredients.forEach((elem) => {
    const itemElement = document.createElement("li");
    itemElement.innerText += elem;
    items.push(itemElement);
  });
  ingredientsElement.append(...items);
});
