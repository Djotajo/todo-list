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
import projectsToNavbar from "./projectsToNavbar";
import currentProject from "./setCurrentProject";
import renderProject from "./renderProject";
import projectView from "./projectView";
import defaultProject from "./defaultProject";
import getCurrentProject from "./getCurrentProject";
import deleteIcon from "../assets/delete.svg";
import setCurrentProject from "./setCurrentProject";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  defaultProject();

  // navbar elements

  const addNewProject = document.createElement("button");
  addNewProject.innerHTML = "Create new project";

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add new todo";

  const sortByDateButton = document.createElement("button");
  sortByDateButton.innerHTML = "Sort by date";
  sortByDateButton.value = "off";
  sortByDateButton.addEventListener("click", function () {
    // render(sortByDate(todosDisplay(), sortByDateButton));
    renderProject(
      sortByDate(projectView(getCurrentProject()), sortByDateButton)
    );
  });

  // renderProject(projectView(getCurrentProject()));

  const sortByDeadlineButton = document.createElement("button");
  sortByDeadlineButton.innerHTML = "Sort by deadline";
  sortByDeadlineButton.value = "off";
  sortByDeadlineButton.addEventListener("click", function () {
    // render(sortByDeadline(todosDisplay(), sortByDeadlineButton));
    renderProject(
      sortByDeadline(projectView(getCurrentProject()), sortByDeadlineButton)
    );
  });

  const sortByPriorityButton = document.createElement("button");
  sortByPriorityButton.innerHTML = "Sort by priority";
  sortByPriorityButton.value = "off";
  sortByPriorityButton.addEventListener("click", function () {
    // render(sortByPriority(todosDisplay(), sortByPriorityButton));
    renderProject(
      sortByPriority(projectView(getCurrentProject()), sortByPriorityButton)
    );
  });

  const newProjectFormDiv = document.createElement("div");
  newProjectFormDiv.innerHTML = newProjectForm();

  const newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.innerHTML = newTodoForm();

  const navbarAdditional = document.querySelector("#navbarAdditional");
  navbarAdditional.innerHTML = "";

  const navbarProjects = document.querySelector("#navbarProjects");
  navbarProjects.innerHTML = "";

  navbarAdditional.appendChild(addNewProject);
  navbarAdditional.appendChild(addNewTodo);
  navbarAdditional.appendChild(sortByDateButton);
  navbarAdditional.appendChild(sortByDeadlineButton);
  navbarAdditional.appendChild(sortByPriorityButton);
  navbarAdditional.appendChild(newProjectFormDiv);
  navbarAdditional.appendChild(newTodoFormDiv);
  // navbarAdditional.appendChild(projectsToNavbar(projectsDisplay()));
  navbarProjects.appendChild(projectsToNavbar(projectsDisplay()));
  const trash = document.querySelectorAll(".trashIcon");
  trash.forEach((element) => {
    element.src = deleteIcon;
  });
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
      setCurrentProject(projectTitle.value);
      // refresh();
      addProject.close();
    }
    projectForm.reset();
    loadTodos();
    // projectsToNavbar(projectsDisplay());
  });

  // Form and dialog - todo

  const addTodo = document.getElementById("addTodo");
  const confirmBtn = addTodo.querySelector("#confirmBtn");
  const closeBtn = addTodo.querySelector("#closeBtn");

  const title = addTodo.querySelector("#title");
  const description = addTodo.querySelector("#description");
  const deadline = addTodo.querySelector("#deadline");
  const priority = addTodo.querySelector("#priority");

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
    let currentPro = getCurrentProject();
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
      newTodoToStorage(todo, currentPro);
      // refresh();
      addTodo.close();
    }
    todoForm.reset();
    renderProject(projectView(getCurrentProject()));
  });
  // refresh();

  document.getElementById("todoForm").checkValidity();
}
