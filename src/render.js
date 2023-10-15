import todoRemove from "./todoRemove";
import noteRemove from "./noteRemove";
import checklistItemRemove from "./checklistItemRemove";
import updateChecklistItem from "./checklistCheckbox";

export default function render(lista) {
  const display = document.querySelector(".workspace");
  display.innerHTML = "";
  lista.forEach((element) => {
    const renderObject = document.createElement("div");
    if (
      !element.hasOwnProperty("description") &&
      !element.hasOwnProperty("text")
    ) {
      const check = document.createElement("input");
      check.type = "checkbox";
      if (element["status"] == true) {
        check.checked = true;
        renderObject.classList.add("checked");
      }
      check.addEventListener("change", function () {
        this.checked
          ? renderObject.classList.add("checked")
          : renderObject.classList.remove("checked");
        updateChecklistItem(element);
      });
      renderObject.appendChild(check);
    }
    for (const [key, value] of Object.entries(element)) {
      if (key != "status") {
        let key = document.createElement("p");
        key.innerHTML = `${value}`;
        renderObject.appendChild(key);
      }
    }
    const removeItem = document.createElement("button");
    removeItem.innerHTML = "Remove";
    if (element.hasOwnProperty("description")) {
      renderObject.classList.add("todoObject");
      removeItem.addEventListener("click", function () {
        todoRemove(element);
      });
    } else if (element.hasOwnProperty("text")) {
      renderObject.classList.add("noteObject");
      removeItem.addEventListener("click", function () {
        noteRemove(element);
      });
    } else {
      renderObject.classList.add("checklistItemObject");
      removeItem.addEventListener("click", function () {
        checklistItemRemove(element);
      });
    }
    renderObject.appendChild(removeItem);
    display.appendChild(renderObject);
  });
}
