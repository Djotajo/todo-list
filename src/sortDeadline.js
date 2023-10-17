// import compareAsc from 'date-fns';

export default function sortByDeadline(items) {
  return items.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    console.log(a.deadline);
    return b.deadline - a.deadline;
  });
}
