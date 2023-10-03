export default function newTodoToStorage(newTodo) {
  let todosArray = [];
  if (localStorage.getItem("allTodos")) {
    todosArray = JSON.parse(localStorage.getItem("allTodos"));
    todosArray.push(newTodo);
    localStorage.setItem("allTodos", JSON.stringify(todosArray));
  } else {
    todosArray.push(newTodo);
    localStorage.setItem("allTodos", JSON.stringify(todosArray));
  }
}
