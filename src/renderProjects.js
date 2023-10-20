export default function renderProjects(projects) {
  const projectsDiv = document.createElement("div");
  //   navbarDiv = document.querySelector("#navbarAdditional");
  console.log(projects);
  projects.array.forEach((element) => {
    let projectButton = document.createElement("button");
    projectButton.innerHTML = element.title;
    projectsDiv.appendChild(projectButton);
  });
  //   navbarDiv.appendChild(projectsDiv);
}
