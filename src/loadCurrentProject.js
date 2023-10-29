import getCurrentProject from "./getCurrentProject";
import renderProject from "./renderProject";
import projectView from "./projectView";

export default function loadCurrentProject() {
  if (getCurrentProject()) {
    renderProject(projectView(getCurrentProject()));
  }
}
