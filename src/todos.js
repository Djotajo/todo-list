import newTodo from "./newtodo";
import render from "./render";
import newTodoForm from "./newTodoForm";
import newTodoToStorage from "./newTodoToStorage";
import todosDisplay from "./todosDisplay";
import sortByDate from "./sortDate";
import sortByDeadline from "./sortDeadline";
import sortByPriority from "./sortPriority";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  // navbar elements

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add New Todo or not Todo";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(todosDisplay()));
  });

  const sortByDeadlineButton = document.createElement("button");
  sortByDeadlineButton.innerHTML = "Sort by deadline";

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";

  const newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.innerHTML = newTodoForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(addNewTodo);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByDeadlineButton);
  navbarAdditional.appendChild(sortByPriorityButton);
  navbarAdditional.appendChild(newTodoFormDiv);

  // Form and dialog

  const addTodo = document.getElementById("addTodo");
  const confirmBtn = addTodo.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const deadline = document.querySelector("#deadline");
  const priority = document.querySelector("#priority");

  // Storage
  render(todosDisplay());

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
      newTodoToStorage(todo);
      // refresh();
      addTodo.close();
    }
    todoForm.reset();
    render(todosDisplay());
  });

  // refresh();

  document.getElementById("todoForm").checkValidity();
}
