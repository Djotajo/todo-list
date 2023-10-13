export default function checklistDisplay() {
  let checklistArray = [];
  if (localStorage.getItem("allChecklistItems")) {
    checklistArray = JSON.parse(localStorage.getItem("allChecklistItems"));
  }
  return checklistArray;
}
