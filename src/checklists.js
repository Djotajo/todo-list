import newChecklistItem from "./newChecklistItem";
import render from "./render";
import newChecklistItemForm from "./newChecklistItemForm";
import newChecklistItemToStorage from "./newChecklistItemToStorage";
import checklistDisplay from "./checklistDisplay";
import sortByDate from "./sortDate";
import sortByStatus from "./sortStatus";

export default function loadChecklist() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "checklist");

  const navbarProjects = document.querySelector("#navbarProjects");
  navbarProjects.innerHTML = "";

  // navbar elements

  const addNewChecklistItem = document.createElement("button");
  addNewChecklistItem.innerHTML = "Add new item";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.value = "off";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(checklistDisplay(), sortByDateButton));
  });

  const sortByStatusButton = document.createElement("button");
  sortByStatusButton.innerHTML = "Sort by status";
  sortByStatusButton.value = "off";
  sortByStatusButton.addEventListener("click", function () {
    render(sortByStatus(checklistDisplay(), sortByStatusButton));
  });

  const newChecklistItemFormDiv = document.createElement("div");
  newChecklistItemFormDiv.innerHTML = newChecklistItemForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(addNewChecklistItem);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByStatusButton);
  navbarAdditional.appendChild(newChecklistItemFormDiv);

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
