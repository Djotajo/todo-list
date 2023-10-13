export default function newChecklistItem(title) {
  this.title = title;
  this.date = new Date(Date.now());
}
