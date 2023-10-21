// export default function newTodoToStorage(newTodo) {
//   let todosArray = [];
//   if (localStorage.getItem("allTodos")) {
//     todosArray = JSON.parse(localStorage.getItem("allTodos"));
//     todosArray.push(newTodo);
//     localStorage.setItem("allTodos", JSON.stringify(todosArray));
//   } else {
//     todosArray.push(newTodo);
//     localStorage.setItem("allTodos", JSON.stringify(todosArray));
//   }
// }
import currentProject from "./setCurrentProject";

// export default function newTodoToStorage(newTodo) {
//   let todosArray = [];
//   console.log(newTodo);
//   current = currentProject();
//   if (localStorage.getItem(current)) {
//     todosArray = JSON.parse(localStorage.getItem(current));
//     todosArray.push(newTodo);
//     localStorage.setItem(current, JSON.stringify(todosArray));
//   } else {
//     todosArray.push(newTodo);
//     localStorage.setItem(current, JSON.stringify(todosArray));
//   }
// }

export default function newTodoToStorage(newTodo, currentProject) {
  let todosArray = [];
  console.log(newTodo);
  if (localStorage.getItem(currentProject)) {
    todosArray = JSON.parse(localStorage.getItem(currentProject));
    todosArray.push(newTodo);
    localStorage.setItem(currentProject, JSON.stringify(todosArray));
  } else {
    todosArray.push(newTodo);
    localStorage.setItem(currentProject, JSON.stringify(todosArray));
  }
}
