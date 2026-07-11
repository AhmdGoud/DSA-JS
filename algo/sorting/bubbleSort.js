const arri = [40, 50, 30, 10, 20];

function bubble(ar) {
  const arr = ar;

  let len = arr.length - 1;

  let isSwapped = false;

  while (len > 0) {
    let i = 0;
    let j = i + 1;

    while (j <= len) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isSwapped = true;
      }

      i++;
      j = i + 1;
    }

    // to check if first iteration didn't swap any items then it mean items in order
    if (!isSwapped) {
      console.log("items already in order");
      return arr;
    }

    len--;
  }

  return arr;
}

console.log(bubble(arri)); // [10, 20, 30, 40, 50]
