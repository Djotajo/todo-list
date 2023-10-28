// export default function newNoteForm() {
//   return `<dialog id="addNote">
//       <form id="noteForm">
//           <p>
//               <label for="title">Title</label>
//               <input type="text" size="30" id="title" name="title" required />
//           </p>

//           <p>
//               <label for="text">Text</label>
//               <textarea rows="6" cols="30" id="text" name="text" required></textarea>
//           </p>
//               <div>
//                 <button
//                   id="closeBtn"
//                   value="cancel"
//                   formmethod="dialog"
//                   type="button">
//                   Cancel
//                 </button>
//                 <button id="confirmBtn" value="default" formmethod="dialog">
//                   Confirm
//                 </button>
//               </div>
//       </form>
//   </dialog>

//       <p>
//       <label for="showDialog" id="showDialogLabel">
//           </label>
//         </p>`;
// }

export default function newNoteForm() {
  return `<dialog id="addNote">
      <form id="noteForm">
          <p>
              <label for="text">Text</label>
              <textarea rows="6" cols="50" id="text" name="text" required></textarea>
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
