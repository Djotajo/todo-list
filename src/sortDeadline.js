export default function sortByDeadline(items) {
  return items
    .sort(function (a, b) {
      return new Date(b.deadline) - new Date(a.deadline);
    })
    .reverse();
}
