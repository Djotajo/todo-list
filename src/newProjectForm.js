export default function newProjectForm() {
  return `<dialog id="addProject">
        <form id="projectForm">
            <p>
                <label for="title">Title</label>
                <input type="text" size="30" id="title" name="title" required />
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
