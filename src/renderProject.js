import todoRemove from "./todoRemove";
import priorityColor from "./priority";

export default function renderProject(project) {
  const display = document.querySelector(".workspace");
  display.innerHTML = "";

  project.forEach((element) => {
    const renderObject = document.createElement("div");
    for (const [key, value] of Object.entries(element)) {
      if (key != "status") {
        if (key === "deadline") {
          let first = document.createElement("p");
          first.innerHTML = `Deadline - ${new Date(value).toDateString()}`;
          renderObject.appendChild(first);
        } else if (key === "priority" || key === "date") {
        } else {
          console.log(key, value);
          let second = document.createElement("p");
          second.innerHTML = `${value}`;
          renderObject.appendChild(second);
        }
      }
    }
    const removeItem = document.createElement("button");
    removeItem.innerHTML = "Remove";

    if (element.hasOwnProperty("description")) {
      renderObject.classList.add("todoObject");
      renderObject.classList.add(priorityColor(element["priority"]));
      removeItem.addEventListener("click", function () {
        todoRemove(element);
      });
    }
    renderObject.appendChild(removeItem);
    display.appendChild(renderObject);
  });
}
