export default function updateChecklistItem(checklistItem) {
  let checklistItemsArray = [];
  console.log("bro");
  if (localStorage.getItem("allChecklistItems")) {
    checklistItemsArray = JSON.parse(localStorage.getItem("allChecklistItems"));

    const findItem = checklistItemsArray.find(
      (item) => item.date === checklistItem.date
    );
    findItem.status === true
      ? (findItem.status = false)
      : (findItem.status = true);
    localStorage.setItem(
      "allChecklistItems",
      JSON.stringify(checklistItemsArray)
    );
  }
}
