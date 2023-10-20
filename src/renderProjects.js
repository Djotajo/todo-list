export default function renderProjects(projects) {
  let projectsDiv = document.createElement("div");
  //   navbarDiv = document.querySelector("#navbarAdditional");
  projects.forEach((element) => {
    console.log(element);
    let renderObject = document.createElement("div");
    for (const [key, value] of Object.entries(element)) {
      let key = document.createElement("p");
      key.innerHTML = `${value}`;
      renderObject.appendChild(key);
      projectsDiv.appendChild(renderObject);
    }
  });
  return projectsDiv;
}
