export default function priorityColor(color) {
  let returnColor;
  switch (color) {
    case "High":
      returnColor = "high";
      break;
    case "Medium":
      returnColor = "medium";
      break;
    case "Low":
      returnColor = "low";
      break;
  }
  return returnColor;
}

// let sorted = items.sort(function (a, b) {
//   let aPrio = a.priority;
//   let bPrio = b.priority;
//   let aFin;
//   let bFin;

//   switch (aPrio) {
//     case "High":
//       aFin = 1;
//       break;
//     case "Medium":
//       aFin = 2;
//       break;
//     case "Low":
//       aFin = 3;
//       break;
//   }
//   switch (bPrio) {
//     case "High":
//       bFin = 1;
//       break;
//     case "Medium":
//       bFin = 2;
//       break;
//     case "Low":
//       bFin = 3;
//       break;
//   }

//   return aFin - bFin;
// });
// if (button.value === "off") {
//   button.value = "on";
//   return sorted;
// } else {
//   button.value = "off";
//   return sorted.reverse();
// }
