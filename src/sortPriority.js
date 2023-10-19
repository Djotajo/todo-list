export default function sortByPriority(items) {
  return items.sort(function (a, b) {
    let aPrio = a.priority;
    let bPrio = b.priority;
    let aFin;
    let bFin;

    switch (aPrio) {
      case "High":
        aFin = 1;
        break;
      case "Medium":
        aFin = 2;
        break;
      case "Low":
        aFin = 3;
        break;
    }
    switch (bPrio) {
      case "High":
        bFin = 1;
        break;
      case "Medium":
        bFin = 2;
        break;
      case "Low":
        bFin = 3;
        break;
    }

    return aFin - bFin;
  });
}
