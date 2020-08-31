document.addEventListener("DOMContentLoaded", () => {
  const changeTitle = (event) => {
    const { currentTarget } = event;
    const card = currentTarget.parentElement;
    const title = card.querySelector(".card__title");

    title.textContent = "New title";
  };
  const cards = document.querySelectorAll(".card");

  //   cards.forEach((card) => {
  //     const button = card.querySelector(".card__button");
  //     button.addEventListener("click", changeTitle);
  //   });

  //   document.body.addEventListener("click", () => console.log("Body click"));
  //   document
  //     .querySelector(".wrapper")
  //     .addEventListener("click", () => console.log("Wrapper click"));
  //   document
  //     .querySelector(".card")
  //     .addEventListener("click", () => console.log("Card click"));
  //   document
  //     .querySelector(".card__button")
  //     .addEventListener("click", () => console.log("Button click"));
});
