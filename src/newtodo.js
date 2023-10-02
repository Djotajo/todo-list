export default function newTodo(title, description, deadline, priority) {
  this.title = title;
  this.description = description;
  this.deadline = deadline;
  this.priority = priority;
  this.date = new Date(Date.now());
}
