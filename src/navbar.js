import loadTodos from "./todos";
// import loadNotes from "./notes";
// import loadChecklists from "./checklists";

export default function navbar() {
  const navbar = document.createElement("div");

  const todos = document.createElement("button");
  const notes = document.createElement("button");
  const checklists = document.createElement("button");

  todos.innerHTML = "Todos";
  notes.innerHTML = "Notes";
  checklists.innerHTML = "Checklists";

  navbar.classList.add("navbar");

  navbar.appendChild(todos);
  navbar.appendChild(notes);
  navbar.appendChild(checklists);

  todos.addEventListener("click", loadTodos);
  // notes.addEventListener("click", loadNotes);
  // checklists.addEventListener("click", loadChecklists);

  return navbar;
}
