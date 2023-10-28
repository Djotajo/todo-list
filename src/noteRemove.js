import loadNotes from "./notes";

export default function noteRemove(
  element,
  list = JSON.parse(localStorage.getItem("allNotes"))
) {
  list.splice(
    list.findIndex((item) => item.text === element.text),
    1
  );
  localStorage.setItem("allNotes", JSON.stringify(list));
  loadNotes();
}
