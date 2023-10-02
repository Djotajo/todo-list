import loadTodos from "./todos";
import loadNotes from "./notes";
// import loadChecklists from "./checklists";

export default function navbar() {
  const navbar = document.createElement("div");

  const navbarMain = document.createElement("div");
  navbarMain.classList.add("navbarItemContainer");

  const navbarAdditional = document.createElement("div");
  navbarAdditional.classList.add("navbarItemContainer");
  navbarAdditional.setAttribute("id", "navbarAdditional");

  const todos = document.createElement("button");
  const notes = document.createElement("button");
  const checklists = document.createElement("button");

  todos.innerHTML = "Todos";
  todos.addEventListener("click", loadTodos);

  notes.innerHTML = "Notes";
  notes.addEventListener("click", loadNotes);

  checklists.innerHTML = "Checklists";
  // checklists.addEventListener("click", loadChecklists);

  navbar.classList.add("navbar");

  navbarMain.appendChild(todos);
  navbarMain.appendChild(notes);
  navbarMain.appendChild(checklists);

  navbar.appendChild(navbarMain);
  navbar.appendChild(navbarAdditional);

  return navbar;
}
