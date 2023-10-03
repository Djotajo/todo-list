export default function todosDisplay() {
  let todosArray = [];
  if (localStorage.getItem("allTodos")) {
    todosArray = JSON.parse(localStorage.getItem("allTodos"));
  }
  return todosArray;
}
