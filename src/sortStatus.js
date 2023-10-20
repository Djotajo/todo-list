export default function sortByStatus(items, button) {
  if (button.value === "off") {
    button.value = "on";
    return items.sort(function (a, b) {
      return b.status - a.status;
    });
  } else {
    button.value = "off";
    return items
      .sort(function (a, b) {
        return b.status - a.status;
      })
      .reverse();
  }
}
