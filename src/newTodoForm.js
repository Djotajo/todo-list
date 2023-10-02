export default function newTodoForm() {
  return `<dialog id="addTodo">
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
}
