import setCurrentProject from "./setCurrentProject";
import newProjectStorage from "./newProjectStorage";
import projectView from "./projectView";
import renderProject from "./renderProject";

export default function projectsToNavbar(projects) {
  let projectsDiv = document.createElement("div");
  projects.forEach((element) => {
    console.log(element);
    let renderObject = document.createElement("button");
    for (const [key, value] of Object.entries(element)) {
      renderObject.innerHTML = `${value}`;
      renderObject.addEventListener("click", function () {
        renderProject(projectView(value));
        setCurrentProject(value);
      });
      projectsDiv.appendChild(renderObject);
    }
  });
  return projectsDiv;
}
