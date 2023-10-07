export default function notesDisplay() {
  let notesArray = [];
  if (localStorage.getItem("allNotes")) {
    notesArray = JSON.parse(localStorage.getItem("allNotes"));
  }
  return notesArray;
}
