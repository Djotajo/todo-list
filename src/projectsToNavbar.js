import setCurrentProject from "./setCurrentProject";
import projectView from "./projectView";
import renderProject from "./renderProject";

export default function projectsToNavbar(projects) {
  let projectsDiv = document.createElement("div");
  let projectsList = document.createElement("ul");
  projects.forEach((element) => {
    let listItem = document.createElement("li");
    let renderObject = document.createElement("button");
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
      projectsList.appendChild(listItem);
      projectsDiv.appendChild(projectsList);
    }
  });
  return projectsDiv;
}
