import loadChecklist from "./checklists";

export default function checklistItemRemove(
  element,
  list = JSON.parse(localStorage.getItem("allChecklistItems"))
) {
  list.splice(
    list.findIndex((item) => item.title === element.title),
    1
  );
  localStorage.setItem("allChecklistItems", JSON.stringify(list));
  loadChecklist();
}
