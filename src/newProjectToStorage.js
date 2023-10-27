export default function newProjectToStorage(newProject) {
  let projectsArray = [];
  if (localStorage.getItem("allProjects")) {
    projectsArray = JSON.parse(localStorage.getItem("allProjects"));
    console.log(newProject, projectsArray);
    if (
      projectsArray.filter((item) => item.title === newProject.title).length ===
      0
    ) {
      projectsArray.push(newProject);
    } else {
      alert("Project with that name already exists!");
    }
    localStorage.setItem("allProjects", JSON.stringify(projectsArray));
  } else {
    projectsArray.push(newProject);
    localStorage.setItem("allProjects", JSON.stringify(projectsArray));
  }
}

// treba staviti sta u slucaju da vec ima projekat istog imena
