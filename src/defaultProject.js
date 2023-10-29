import newProjectToStorage from "./newProjectToStorage";
import newProject from "./newProject";
import newProjectStorage from "./newProjectStorage";

export default function defaultProject() {
  // if((!localStorage.getItem("currentProject", "default")))
  const defaultProject = new newProject("default");
  // let projectsArray = JSON.parse(localStorage.getItem("allProjects"));
  // if (
  //   projectsArray.filter((item) => item.title === defaultProject.title)
  //     .length === 0
  // )
  if (!JSON.parse(localStorage.getItem("allProjects"))) {
    newProjectToStorage(defaultProject);
    newProjectStorage(defaultProject);
  }

  //   return localStorage.getItem("currentProject");
}

// export default function defaultProject() {
//     if (!localStorage.getItem("currentProject", "default")) {
//       newProjectToStorage(newProject("default"));
//       localStorage.setItem("currentProject", "default");
//     }
//     return localStorage.getItem("currentProject");
//   }
