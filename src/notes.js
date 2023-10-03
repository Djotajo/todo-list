import newNoteForm from "./newNoteForm";
import newNote from "./newtodo";
import render from "./render";
import sortByDeadline from "./sortDeadline";
import sortByPriority from "./sortPriority";

export default function loadNotes() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Notes");

  const addNewNote = document.createElement("button");
  addNewNote.innerHTML = "Add new note";

  const sortByDeadlineButton = document.createElement("button");
  sortByDeadlineButton.innerHTML = "Sort by deadline";

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";

  //   display.innerHTML = newNoteForm();

  const hope = document.getElementById("showDialogLabel");
  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  const newNoteFormDiv = document.createElement("div");
  newNoteFormDiv.innerHTML = newNoteForm();

  navbarAdditional.appendChild(newNoteFormDiv);
  navbarAdditional.appendChild(addNewNote);
  navbarAdditional.appendChild(sortByDeadlineButton);
  navbarAdditional.appendChild(sortByPriorityButton);

  //   const addNewNote = document.getElementById("showDialog");
  const addNote = document.getElementById("addNote");
  const confirmBtn = addNote.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const deadline = document.querySelector("#deadline");
  const priority = document.querySelector("#priority");

  let createnew;

  let todosTodos = [];

  addNewNote.addEventListener("click", () => {
    addNote.showModal();
  });

  closeBtn.addEventListener("click", () => {
    addNote.close();
    noteForm.reset();
  });

  confirmBtn.addEventListener("click", (event) => {
    const formCheck = document.getElementById("noteForm").checkValidity();
    if (!formCheck) {
      document.getElementById("noteForm").reportValidity();
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
      addNote.close();
    }
    noteForm.reset();
    render(todosTodos);
  });

  // refresh();

  document.getElementById("noteForm").checkValidity();
  render(todosTodos);
}
