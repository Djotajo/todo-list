// import loadHome from "./home";
// import loadMenu from "./menu.js";
// import loadContact from "./contact";

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

  // home.addEventListener("click", loadHome);
  // menu.addEventListener("click", loadMenu);
  // contact.addEventListener("click", loadContact);

  return navbar;
}
