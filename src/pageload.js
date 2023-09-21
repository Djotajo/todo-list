import header from "./header";
import navbar from "./navbar";
import footer from "./footer";
import home from "./home";
import gitLogo from "../assets/github-mark-white.png";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const currentTab = document.createElement("div");

  currentTab.classList.add("currentTab");

  content.appendChild(header());
  content.appendChild(navbar());
  content.appendChild(home());
  content.appendChild(footer());

  document.getElementById("githubLogo").src = gitLogo;
}
