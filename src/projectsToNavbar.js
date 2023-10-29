import setCurrentProject from "./setCurrentProject";
import projectView from "./projectView";
import renderProject from "./renderProject";
import projectRemove from "./projectRemove";
import deleteIcon from "../assets/delete.svg";

export default function projectsToNavbar(projects) {
  let projectsDiv = document.createElement("div");
  let projectsList = document.createElement("ul");
  projects.forEach((element) => {
    let listItem = document.createElement("li");
    let renderObject = document.createElement("button");
    let removeObject = document.createElement("button");
    removeObject.addEventListener("click", function () {
      projectRemove(element);
    });
    removeObject.innerHTML = `<img class="trashIcon"/>`;

    removeObject.setAttribute("title", `Remove ${element["title"]}`);
    for (const [key, value] of Object.entries(element)) {
      renderObject.innerHTML = `${value}`;
      projectsDiv.addEventListener("mouseup", function () {
        renderObject.classList.remove("clicked");
      });
      renderObject.addEventListener("click", function () {
        renderProject(projectView(value));
        setCurrentProject(value);
        renderObject.classList.add("clicked");
      });
      listItem.appendChild(renderObject);
      listItem.appendChild(removeObject);
      projectsList.appendChild(listItem);
      projectsDiv.appendChild(projectsList);
    }
  });
  // document.querySelector(".trashIcon").src = deleteIcon;
  return projectsDiv;
}

// ovdje ubaciti project remove
