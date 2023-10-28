import newNote from "./newnote";
import render from "./render";
import newNoteForm from "./newNoteForm";
import newNoteToStorage from "./newNoteToStorage";
import notesDisplay from "./notesDisplay";
import sortByDate from "./sortDate";

export default function loadNotes() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Notes");

  const navbarProjects = document.querySelector("#navbarProjects");
  navbarProjects.innerHTML = "";

  // navbar elements

  const addNewNote = document.createElement("button");
  addNewNote.innerHTML = "Add new note";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.value = "off";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(notesDisplay(), sortByDateButton));
  });

  const newNoteFormDiv = document.createElement("div");
  newNoteFormDiv.innerHTML = newNoteForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(addNewNote);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(newNoteFormDiv);

  // Form and dialog

  const addNote = document.getElementById("addNote");
  const confirmBtn = addNote.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  // const title = document.querySelector("#title");
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
      // const note = new newNote(title.value, text.value);
      const note = new newNote(text.value);
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
