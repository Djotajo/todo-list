import noteRemove from "./noteRemove";

export default function render(lista) {
  const display = document.querySelector(".workspace");
  display.innerHTML = "";
  lista.forEach((element) => {
    const renderObject = document.createElement("div");
    if (element.hasOwnProperty("description")) {
      renderObject.classList.add("todoObject");
    } else if (element.hasOwnProperty("text")) {
      renderObject.classList.add("noteObject");
    } else {
      renderObject.classList.add("checklistItemObject");
    }
    for (const [key, value] of Object.entries(element)) {
      let key = document.createElement("p");
      key.innerHTML = `${value}`;
      renderObject.appendChild(key);
    }
    const removeItem = document.createElement("button");
    removeItem.innerHTML = "Remove";
    removeItem.addEventListener("click", function () {
      noteRemove(element);
    });
    renderObject.appendChild(removeItem);
    display.appendChild(renderObject);
  });
}
