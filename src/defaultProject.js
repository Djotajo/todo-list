import newProjectToStorage from "./newProjectToStorage";
import newProject from "./newProject";

export default function defaultProject() {
  localStorage.setItem("currentProject", "default");
  return localStorage.getItem("currentProject");
}

// export default function defaultProject() {
//     if (!localStorage.getItem("currentProject", "default")) {
//       newProjectToStorage(newProject("default"));
//       localStorage.setItem("currentProject", "default");
//     }
//     return localStorage.getItem("currentProject");
//   }
