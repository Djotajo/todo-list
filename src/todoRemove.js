import getCurrentProject from "./getCurrentProject";
import renderProject from "./renderProject";
import projectView from "./projectView";

export default function todoRemove(
  element,
  list = JSON.parse(localStorage.getItem(getCurrentProject()))
) {
  list.splice(
    list.findIndex((item) => item.title === element.title),
    1
  );
  localStorage.setItem(getCurrentProject(), JSON.stringify(list));
  renderProject(projectView(getCurrentProject()));
}
