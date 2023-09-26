import newTodo from "./newtodo";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add New Todo or not Todo";

  display.innerHTML = `<dialog id="addTodo">
      <form id="todoForm">
          <p>
              <label for="title">Title</label>
              <input type="text" size="30" id="title" name="title" required />
          </p>
          
          <p>
              <label for="description">Description</label>
              <textarea rows="6" cols="30" id="description" name="description" required></textarea>
          </p>
          <p>
              <label for="deadline">Deadline</label>
              <input type="date" size="30" id="deadline" name="deadline" required />
          </p>
          <p>
              <label for="priority">
                  Priority
                  <select id="priority" name="priority" required>
                    <option value="" disabled selected>Choose…</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
              </label>
          </p>

              <div>
                <button
                  id="closeBtn"
                  value="cancel"
                  formmethod="dialog"
                  type="button">
                  Cancel
                </button>
                <button id="confirmBtn" value="default" formmethod="dialog">
                  Confirm
                </button>
              </div>
      </form>
  </dialog>

      <p>
      <label for="showDialog" id="showDialogLabel">
          </label>
        </p>`;

  const hope = document.getElementById("showDialogLabel");
  hope.appendChild(addNewTodo);

  //   const addNewTodo = document.getElementById("showDialog");
  const addTodo = document.getElementById("addTodo");
  const confirmBtn = addTodo.querySelector("#confirmBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const deadline = document.querySelector("#deadline");
  const priority = document.querySelector("#priority");

  let createnew;

  let todosTodos = [];

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
      // naredne dvije linije treba obrisati, napraviti posebnu funkciju za dodavanje u spisak todos
      todosTodos.push(todo);
      console.log(todosTodos);

      // razmisliti ima li potrebe za indeksom
      todo.number = todosTodos.findIndex((todos) => todos.title === todo.title);
      console.log(todo.number);
      // addBookToLibrary(newbook);
      // refresh();
      addTodo.close();
    }
    todoForm.reset();
  });

  // refresh();

  document.getElementById("todoForm").checkValidity();
}
