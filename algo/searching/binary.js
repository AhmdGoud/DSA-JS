// binary or algorithmic search
// we just can apply it or sorted array
// time complexity is o(1) in best case if first mid was equal key else it's o(log n)
// space complexity is o(1)

const arr = [12, 16, 23, 37, 42, 45, 56, 61, 67, 78, 89, 93];

function binary(key, arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (end >= start) {
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  return -1;
}

const result = binary(78, arr);
if (result !== -1) {
  console.log(`item in index ${result}`);
} else {
  console.log("item is not in arr");
}
