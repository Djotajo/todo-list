import loadNotes from "./notes";

export default function noteRemove(
  element,
  list = JSON.parse(localStorage.getItem("allNotes"))
) {
  list.splice(
    list.findIndex((item) => item.title === element.title),
    1
  );
  localStorage.setItem("allNotes", JSON.stringify(list));
  loadNotes();
}
