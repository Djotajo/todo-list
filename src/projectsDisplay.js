export default function projectsDisplay(projects) {
  let projectsArray = [];
  if (localStorage.getItem("allProjects")) {
    projectsArray = JSON.parse(localStorage.getItem("allProjects"));
  }
  return projectsArray;
}
