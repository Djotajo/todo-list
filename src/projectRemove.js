import loadTodos from "./todos";
import setCurrentProject from "./setCurrentProject";

export default function projectRemove(
  element,
  list = JSON.parse(localStorage.getItem("allProjects"))
) {
  if (element.title === "default") {
    alert("Can't remove default project");
  } else {
    list.splice(
      list.findIndex((item) => item.title === element.title),
      1
    );
    localStorage.setItem("allProjects", JSON.stringify(list));
    localStorage.removeItem(element.title);
    loadTodos();
  }
  setCurrentProject("default");
}
