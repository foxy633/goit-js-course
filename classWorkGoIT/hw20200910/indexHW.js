document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  const list = document.querySelector(".list");

  const ITEMS_LS_KEY = "todos";

  const addItemToLocalStorage = (value) => {
    const todos = localStorage.getItem(ITEMS_LS_KEY);

    const hasItemsInLocalStorage = todos !== null;

    let newTodos = [];

    if (!hasItemsInLocalStorage) {
      newTodos = [value];
      //   localStorage.setItem(ITEMS_LS_KEY, JSON.stringify([value]));
    } else {
      const parsedTodos = JSON.parse(todos);
      newTodos = [...parsedTodos, value];
      //   const updatedTodos = [...parsedTodos, value];
      //   localStorage.setItem(ITEMS_LS_KEY, JSON.stringify(updatedTodos));
    }
    localStorage.setItem(ITEMS_LS_KEY, JSON.stringify(newTodos));
  };

  const createListItem = (value) => {
    const li = document.createElement("li");
    li.textContent = value;
    return li;
  };

  const onClickHandler = (event) => {
    event.preventDefault();

    const { value } = input;
    const newListItem = createListItem(value);
    list.appendChild(newListItem);
    addItemToLocalStorage(value);
  };

  const renderListItemsFromLocalStorage = () => {
    const todos = localStorage.getItem(ITEMS_LS_KEY);
    if (!todos) {
      return;
    }
    JSON.parse(todos).forEach((todo) => {
      const li = createListItem(todo);
      list.appendChild(li);
    });
  };
  renderListItemsFromLocalStorage();
  button.addEventListener("click", onClickHandler);
});
