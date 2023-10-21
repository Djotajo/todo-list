export default function newProjectStorage(newProject) {
  let projectArray = [];
  if (!localStorage.getItem(newProject)) {
    console.log("storage created");
    localStorage.setItem(newProject, JSON.stringify(projectArray));
  }
}
