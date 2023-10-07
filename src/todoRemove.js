import loadTodos from "./todos";

export default function todoRemove(
  element,
  list = JSON.parse(localStorage.getItem("allTodos"))
) {
  list.splice(
    list.findIndex((item) => item.title === element.title),
    1
  );
  localStorage.setItem("allTodos", JSON.stringify(list));
  loadTodos();
}
