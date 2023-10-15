import newChecklistItem from "./newChecklistItem";
import render from "./render";
import newChecklistItemForm from "./newChecklistItemForm";
import newChecklistItemToStorage from "./newChecklistItemToStorage";
import checklistDisplay from "./checklistDisplay";
import sortByDate from "./sortDate";
import sortByPriority from "./sortPriority";

export default function loadChecklist() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "checklist");

  // navbar elements

  const addNewChecklistItem = document.createElement("button");
  addNewChecklistItem.innerHTML = "Add new item";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(checklistDisplay()));
  });

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";

  const newChecklistItemFormDiv = document.createElement("div");
  newChecklistItemFormDiv.innerHTML = newChecklistItemForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(newChecklistItemFormDiv);
  navbarAdditional.appendChild(addNewChecklistItem);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByPriorityButton);

  // Form and dialog

  const addChecklistItem = document.getElementById("addChecklistItem");
  const confirmBtn = addChecklistItem.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");

  // Storage

  render(checklistDisplay());

  addNewChecklistItem.addEventListener("click", () => {
    addChecklistItem.showModal();
  });

  closeBtn.addEventListener("click", () => {
    addChecklistItem.close();
    addChecklistItem.reset();
    // noteForm.reset();
  });

  confirmBtn.addEventListener("click", (event) => {
    // const formCheck = document.getElementById("noteForm").checkValidity();
    const formCheck = document.getElementById("checklistForm").checkValidity();
    if (!formCheck) {
      document.getElementById("checklistForm").reportValidity();
      //   document.getElementById("noteForm").reportValidity();
    } else {
      event.preventDefault();
      const checklistItem = new newChecklistItem(title.value);
      newChecklistItemToStorage(checklistItem);
      // refresh();
      addChecklistItem.close();
    }
    // noteForm.reset();
    checklistForm.reset();
    render(checklistDisplay());
  });

  // refresh();

  document.getElementById("checklistForm").checkValidity();
  //   document.getElementById("noteForm").checkValidity();
}
