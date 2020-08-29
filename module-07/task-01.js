"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.querySelectorAll("#categories > .item");
  console.log(`В списке ${categoryList.length} категорий`);
  categoryList.forEach((elem) => {
    const categoryHeder = elem.querySelector("h2");
    const categorySub = elem.querySelectorAll("li");
    console.log(`Категория ${categoryHeder.textContent}`);
    console.log(`Количество элементов ${categorySub.length}`);
  });
});
