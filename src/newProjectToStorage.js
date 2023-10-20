export default function newProjectToStorage(newProject) {
  let projectsArray = [];
  if (localStorage.getItem("allProjects")) {
    projectsArray = JSON.parse(localStorage.getItem("allProjects"));
    projectsArray.push(newProject);
    localStorage.setItem("allProjects", JSON.stringify(projectsArray));
  } else {
    projectsArray.push(newProject);
    localStorage.setItem("allProjects", JSON.stringify(projectsArray));
  }
}
