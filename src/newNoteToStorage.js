export default function newNoteToStorage(newNote) {
  let notesArray = [];
  if (localStorage.getItem("allNotes")) {
    notesArray = JSON.parse(localStorage.getItem("allNotes"));
    notesArray.push(newNote);
    localStorage.setItem("allNotes", JSON.stringify(notesArray));
  } else {
    notesArray.push(newNote);
    localStorage.setItem("allNotes", JSON.stringify(notesArray));
  }
}
