import newProjectToStorage from "./newProjectToStorage";
import newProject from "./newProject";
import newProjectStorage from "./newProjectStorage";

export default function defaultProject() {
  const defaultProject = new newProject("default");
  newProjectToStorage(defaultProject);
  newProjectStorage(defaultProject);

  //   return localStorage.getItem("currentProject");
}

// export default function defaultProject() {
//     if (!localStorage.getItem("currentProject", "default")) {
//       newProjectToStorage(newProject("default"));
//       localStorage.setItem("currentProject", "default");
//     }
//     return localStorage.getItem("currentProject");
//   }
