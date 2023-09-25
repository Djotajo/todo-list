import header from "./header";
import home from "./home";
import navbar from "./navbar";
import workspace from "./workspace";
import footer from "./footer";
import gitLogo from "../assets/github-mark-white.png";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const currentTab = document.createElement("div");

  currentTab.classList.add("currentTab");

  content.appendChild(header());
  content.appendChild(home());
  document.getElementById("home").appendChild(navbar());
  document.getElementById("home").appendChild(workspace());
  content.appendChild(footer());

  document.getElementById("githubLogo").src = gitLogo;
}
