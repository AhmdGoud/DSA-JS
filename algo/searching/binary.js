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

// search insert position.
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
const searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;
  let m = Math.floor((s + e) / 2);

  while (e >= s) {
    if (target === nums[m]) {
      return m;
    } else if (target > nums[m]) {
      s = m + 1;
      m = Math.floor((s + e) / 2);
    } else {
      e = m - 1;
      m = Math.floor((s + e) / 2);
    }
  }

  return s;
};

const nums = [1, 4, 6, 9, 13, 17, 33, 56, 78];
const target = 11;

console.log(searchInsert(nums, target));
