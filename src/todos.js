import newTodo from "./newtodo";
import newProject from "./newProject";
import render from "./render";
import newProjectForm from "./newProjectForm";
import newTodoForm from "./newTodoForm";
import newProjectToStorage from "./newProjectToStorage";
import newTodoToStorage from "./newTodoToStorage";
import todosDisplay from "./todosDisplay";
import sortByDate from "./sortDate";
import sortByDeadline from "./sortDeadline";
import sortByPriority from "./sortPriority";
import projectsDisplay from "./projectsDisplay";
import renderProjects from "./renderProjects";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  // navbar elements

  const addNewProject = document.createElement("button");
  addNewProject.innerHTML = "Create new project";

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add New Todo or not Todo";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.value = "off";
  sortByDateButton.addEventListener("click", function () {
    render(sortByDate(todosDisplay(), sortByDateButton));
  });

  const sortByDeadlineButton = document.createElement("button");
  sortByDeadlineButton.innerHTML = "Sort by deadline";
  sortByDeadlineButton.value = "off";
  sortByDeadlineButton.addEventListener("click", function () {
    render(sortByDeadline(todosDisplay(), sortByDeadlineButton));
  });

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";
  sortByPriorityButton.value = "off";
  sortByPriorityButton.addEventListener("click", function () {
    render(sortByPriority(todosDisplay(), sortByPriorityButton));
  });

  const newProjectFormDiv = document.createElement("div");
  newProjectFormDiv.innerHTML = newProjectForm();

  const newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.innerHTML = newTodoForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  navbarAdditional.appendChild(addNewProject);
  navbarAdditional.appendChild(addNewTodo);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByDeadlineButton);
  navbarAdditional.appendChild(sortByPriorityButton);
  navbarAdditional.appendChild(newProjectFormDiv);
  navbarAdditional.appendChild(newTodoFormDiv);
  navbarAdditional.appendChild(renderProjects(projectsDisplay()));

  // Form and dialog - project

  const addProject = document.getElementById("addProject");
  const confirmBtnProject = addProject.querySelector("#confirmBtn");
  const closeBtnProject = addProject.querySelector("#closeBtn");

  const projectTitle = addProject.querySelector("#title");

  // Storage - projects
  // renderProjects(projectsDisplay());

  addNewProject.addEventListener("click", () => {
    addProject.showModal();
  });

  closeBtnProject.addEventListener("click", () => {
    addProject.close();
    projectForm.reset();
  });

  confirmBtnProject.addEventListener("click", (event) => {
    const formCheck = document.getElementById("projectForm").checkValidity();
    if (!formCheck) {
      document.getElementById("projectForm").reportValidity();
    } else {
      event.preventDefault();
      const project = new newProject(projectTitle.value);
      newProjectToStorage(project);
      // refresh();
      addProject.close();
    }
    projectForm.reset();
    // renderProjects(projectsDisplay());
  });

  // Form and dialog - todo

  const addTodo = document.getElementById("addTodo");
  const confirmBtn = addTodo.querySelector("#confirmBtn");
  const closeBtn = addTodo.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const deadline = document.querySelector("#deadline");
  const priority = document.querySelector("#priority");

  // Storage - todo
  render(todosDisplay());

  addNewTodo.addEventListener("click", () => {
    addTodo.showModal();
  });

  closeBtn.addEventListener("click", () => {
    addTodo.close();
    todoForm.reset();
  });

  confirmBtn.addEventListener("click", (event) => {
    const formCheck = document.getElementById("todoForm").checkValidity();
    if (!formCheck) {
      document.getElementById("todoForm").reportValidity();
    } else {
      event.preventDefault();
      const todo = new newTodo(
        title.value,
        description.value,
        deadline.value,
        priority.value
      );
      newTodoToStorage(todo);
      // refresh();
      addTodo.close();
    }
    todoForm.reset();
    render(todosDisplay());
  });

  // refresh();

  document.getElementById("todoForm").checkValidity();
}
