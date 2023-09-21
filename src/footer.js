import gitLogo from "../assets/github-mark-white.png";

export default function footer() {
  const footer = document.createElement("footer");

  footer.innerHTML = `<p>Created by Djotajo</p>
    <a href="https://github.com/Djotajo">
      <img id="githubLogo"/>
    </a>`;

  return footer;
}
