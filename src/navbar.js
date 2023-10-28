import loadTodos from "./todos";
import loadNotes from "./notes";
import loadChecklist from "./checklists";

export default function navbar() {
  const navbar = document.createElement("div");

  const navbarMain = document.createElement("div");
  navbarMain.classList.add("navbarItemContainer");
  navbarMain.setAttribute("id", "navbarMain");

  const navbarAdditional = document.createElement("div");
  navbarAdditional.classList.add("navbarItemContainer");
  navbarAdditional.setAttribute("id", "navbarAdditional");

  //
  const navbarProjects = document.createElement("div");
  navbarProjects.classList.add("navbarItemContainer");
  navbarProjects.setAttribute("id", "navbarProjects");

  const todos = document.createElement("button");
  const notes = document.createElement("button");
  const checklists = document.createElement("button");

  todos.innerHTML = "Projects";
  todos.addEventListener("click", loadTodos);

  notes.innerHTML = "Notes";
  notes.addEventListener("click", loadNotes);

  checklists.innerHTML = "Checklists";
  checklists.addEventListener("click", loadChecklist);

  navbar.classList.add("navbar");

  navbarMain.appendChild(checklists);
  navbarMain.appendChild(todos);
  navbarMain.appendChild(notes);

  navbar.appendChild(navbarMain);
  navbar.appendChild(navbarAdditional);
  //
  navbar.appendChild(navbarProjects);

  return navbar;
}
