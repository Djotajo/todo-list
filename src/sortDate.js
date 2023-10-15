export default function sortByDate(items) {
  return items.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
}
