import todoRemove from "./todoRemove";

export default function renderProject(project) {
  const display = document.querySelector(".workspace");
  display.innerHTML = "";

  project.forEach((element) => {
    console.log(element);
    const renderObject = document.createElement("div");
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
    }
    renderObject.appendChild(removeItem);
    display.appendChild(renderObject);
  });
}
