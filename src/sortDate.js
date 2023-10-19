export default function sortByDate(items, button) {
  if (button.value === "off") {
    button.value = "on";
    return items.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    button.value = "off";
    return items
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
      .reverse();
  }
}
