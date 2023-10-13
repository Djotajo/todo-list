export default function newChecklistItemToStorage(newChecklistItem) {
  let checklistItemsArray = [];
  if (localStorage.getItem("allChecklistItems")) {
    checklistItemsArray = JSON.parse(localStorage.getItem("allChecklistItems"));
    checklistItemsArray.push(newChecklistItem);
    localStorage.setItem(
      "allChecklistItems",
      JSON.stringify(checklistItemsArray)
    );
  } else {
    checklistItemsArray.push(newChecklistItem);
    localStorage.setItem(
      "allChecklistItems",
      JSON.stringify(checklistItemsArray)
    );
  }
}
