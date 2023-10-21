export default function projectView(project) {
  let projectTodos = [];
  if (localStorage.getItem(project)) {
    projectTodos = JSON.parse(localStorage.getItem(project));
  }
  return projectTodos;
}
