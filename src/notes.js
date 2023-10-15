import newNote from "./newnote";
import render from "./render";
import newNoteForm from "./newNoteForm";
import newNoteToStorage from "./newNoteToStorage";
import notesDisplay from "./notesDisplay";
import sortByDate from "./sortDate";
import sortByPriority from "./sortPriority";

export default function loadNotes() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Notes");

  // navbar elements

  const addNewNote = document.createElement("button");
  addNewNote.innerHTML = "Add new note";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(notesDisplay()));
  });

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";

  const newNoteFormDiv = document.createElement("div");
  newNoteFormDiv.innerHTML = newNoteForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(newNoteFormDiv);
  navbarAdditional.appendChild(addNewNote);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByPriorityButton);

  // Form and dialog

  const addNote = document.getElementById("addNote");
  const confirmBtn = addNote.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const text = document.querySelector("#text");

  // Storage

  render(notesDisplay());

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
      const note = new newNote(title.value, text.value);
      newNoteToStorage(note);
      // refresh();
      addNote.close();
    }
    noteForm.reset();
    render(notesDisplay());
  });

  // refresh();

  document.getElementById("noteForm").checkValidity();
}
