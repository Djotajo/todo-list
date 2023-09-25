import newTodo from "./newtodo";

export default function loadTodos() {
  const display = document.querySelector(".workspace");
  display.setAttribute("id", "Todos");

  const addNewTodo = document.createElement("button");
  addNewTodo.innerHTML = "Add New Todo or not Todo";

  display.innerHTML = `<dialog id="addBook">
      <form id="myForm">
          <p>
              <label for="title">Title</label>
              <input type="text" size="30" id="title" name="title" required />
          </p>
          <p>
              <label for="author">Author</label>
              <input type="text" size="30" id="author" name="author" required />
          </p>
          <p>
              <label for="pages">Pages</label>
              <input type="number" size="30" id="pages" name="pages" required />
          </p>
          <p>
              <label for="status">
                  Status
                  <select id="status" name="status" required>
                    <option value="" disabled selected>Choose…</option>
                    <option>Read</option>
                    <option>Not read</option>
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
  const addBook = document.getElementById("addBook");
  const confirmBtn = addBook.querySelector("#confirmBtn");

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const bookStatus = document.querySelector("#status");

  let createnew;

  addNewTodo.addEventListener("click", () => {
    addBook.showModal();
  });

  const closeBtn = document.querySelector("#closeBtn");

  closeBtn.addEventListener("click", () => {
    addBook.close();
    myForm.reset();
  });

  confirmBtn.addEventListener("click", (event) => {
    const formCheck = document.getElementById("myForm").checkValidity();
    if (!formCheck) {
      document.getElementById("myForm").reportValidity();
    } else {
      event.preventDefault();
      createnew = [title.value, author.value, pages.value, bookStatus.value];
      const newbook = new Book(
        createnew[0],
        createnew[1],
        createnew[2],
        createnew[3]
      );
      newbook.number = myLibrary.findIndex(
        (book) => book.title === newbook.title
      );
      addBookToLibrary(newbook);
      refresh();
      addBook.close();
    }
    myForm.reset();
  });

  refresh();

  document.getElementById("myForm").checkValidity();
}

{
  /* <dialog id="addBook">
    <form id="myForm">
        <p>
            <label for="title">Title</label>
            <input type="text" size="30" id="title" name="title" required />
        </p>
        <p>
            <label for="author">Author</label>
            <input type="text" size="30" id="author" name="author" required />
        </p>
        <p>
            <label for="pages">Pages</label>
            <input type="number" size="30" id="pages" name="pages" required />
        </p>
        <p>
            <label for="status">
                Status
                <select id="status" name="status" required>
                  <option value="" disabled selected>Choose…</option>
                  <option>Read</option>
                  <option>Not read</option>
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
        <button id="showDialog" hidden>Add new book</button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>plus-thick</title>
            <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
          </svg>
        </label>
      </p> */
}
