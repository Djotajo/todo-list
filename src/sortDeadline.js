export default function sortByDeadline(items, button) {
  let sorted = items
    .sort(function (a, b) {
      return new Date(b.deadline) - new Date(a.deadline);
    })
    .reverse();
  if (button.value === "off") {
    button.value = "on";
    return sorted;
  } else {
    button.value = "off";
    return sorted.reverse();
  }
}
