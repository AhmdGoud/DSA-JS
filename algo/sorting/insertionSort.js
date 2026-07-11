// we start with the index 1 and compare the elements before
// if greater we insert the element in index position in the place of the other element
// if not we skip to the next element

const arri = [40, 50, 30, 10, 20];

function insertion(ar) {
  const arr = ar;

  let index = 1;

  while (index < arr.length) {
    for (let i = 0; i < index; i++) {
      if (arr[i] > arr[index]) {
        // we destructued item in array cause splice return array so we can get the item as number
        const [item] = arr.splice(index, 1);
        arr.splice(i, 0, item);
      }
    }

    index++;
  }

  return arr;
}

console.log(insertion(arri)); // [10, 20, 30, 40, 50]
// time complexity o(n) in best case else o(n2) - space complexity o(1)

// ---- //
// note : const [item] = arr.splice(index, 1); => for ex: item = 30;
// but if const item = arr.splice(index, 1); => for ex: item = [30];
// or this way const item = arr.splice(2, 1)[0]; => for ex: item = 30;
