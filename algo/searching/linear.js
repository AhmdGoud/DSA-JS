// linear or sequential search
const arr = [12, 23, 45, 67, 42, 89];

function linear(key, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      return i;
    }
  }
  return -1;
}

const result = linear(67, arr);
if (result !== -1) {
  console.log(`item in index ${result}`);
} else {
  console.log("item is not in arr");
}
