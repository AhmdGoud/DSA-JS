const arri = [40, 50, 30, 10, 20];

// we start with the first item in the arr and compare it to the rest items of the arr
// if greater then swap them if not we skip
// then move to the seconed item and so on

function selection(ar) {
  const arr = ar;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}
console.log(selection(arri)); // [10, 20, 30, 40, 50]

// time complexity o(n2) - space complexity o(1)
// Ascending order => min to max
// descending order => max to min
