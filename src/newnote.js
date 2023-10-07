export default function newNote(title, text) {
  this.title = title;
  this.text = text;
  this.date = new Date(Date.now());
}
