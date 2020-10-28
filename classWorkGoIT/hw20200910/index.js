document.addEventListener("DOMContentLoaded", () => {
  const object = {
    var1: "string",
    number: 1,
    array: [1, 2, 3, 4],
    object2: {
      var2: true,
    },
  };
  //   console.log(object);
  //   console.log(JSON.stringify(object));// переводит в строку
  const stringified = JSON.stringify(object);
  console.log(stringified);
  console.log(JSON.parse(stringified)); // переводит строку в обьект де.сериализация - процес передачи
});
