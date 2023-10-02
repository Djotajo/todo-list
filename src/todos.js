import newTodo from "./newtodo";
import render from "./render";
import newTodoForm from "./newTodoForm";
import sortByDeadline from "./sortDeadline";
import sortByPriority from "./sortPriority";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add New Todo or not Todo";

  const sortByDeadlineButton = document.createElement("button");
  sortByDeadlineButton.innerHTML = "Sort by deadline";

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";

  const hope = document.getElementById("showDialogLabel");
  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  const newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.innerHTML = newTodoForm();

  navbarAdditional.appendChild(newTodoFormDiv);

  navbarAdditional.appendChild(addNewTodo);
  navbarAdditional.appendChild(sortByDeadlineButton);
  navbarAdditional.appendChild(sortByPriorityButton);

  //   const addNewTodo = document.getElementById("showDialog");
  const addTodo = document.getElementById("addTodo");
  const confirmBtn = addTodo.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const deadline = document.querySelector("#deadline");
  const priority = document.querySelector("#priority");

  let createnew;

  let todosTodos = [];

  addNewTodo.addEventListener("click", () => {
    addTodo.showModal();
  });

  closeBtn.addEventListener("click", () => {
    addTodo.close();
    todoForm.reset();
  });

  confirmBtn.addEventListener("click", (event) => {
    const formCheck = document.getElementById("todoForm").checkValidity();
    if (!formCheck) {
      document.getElementById("todoForm").reportValidity();
    } else {
      event.preventDefault();
      const todo = new newTodo(
        title.value,
        description.value,
        deadline.value,
        priority.value
      );
      // naredne dvije linije treba obrisati, napraviti posebnu funkciju za dodavanje u spisak todos
      todosTodos.push(todo);
      console.log(todosTodos);

      // razmisliti ima li potrebe za indeksom
      todo.number = todosTodos.findIndex((todos) => todos.title === todo.title);
      console.log(todo.number);
      // addBookToLibrary(newbook);
      // refresh();
      addTodo.close();
    }
    todoForm.reset();
    render(todosTodos);
  });

  // refresh();

  document.getElementById("todoForm").checkValidity();
  render(todosTodos);
}

// window.localStorage["allTodos"] = JSON.stringify(todosTodos);

// const allTodos = JSON.parse(window.localStorage["allTodos"]);
