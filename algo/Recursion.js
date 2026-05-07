// recursion => function calls itself
// it has 2 cases => # Base case and # Recursive case

// Types of Recursion:
// Direct Recursion: Function calls itself directly.
// Indirect Recursion: Function A calls Function B, which calls Function A.
// Tail Recursion: Recursive call is the last operation in the function, allowing some optimizations

// reduce word
function cleanWord(word) {
  if (word.length === 1) {
    return word;
  } else if (word[0] === word[1]) {
    return cleanWord(word.slice(1));
  } else {
    return word[0] + cleanWord(word.slice(1));
  }
}
console.log(cleanWord("wwooorrrlldd")); // world

// factorial number
function fact(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
console.log(fact(4)); // 24

// plaindrome word
function checkWord(word) {
  if (word.length <= 1) {
    return "its a plaindrome";
  } else if (word[0] === word[word.length - 1]) {
    let sliced = word.slice(1, word.length - 1);
    return checkWord(sliced);
  } else {
    return "not plaindrome";
  }
}
console.log(checkWord("racecar"));

// reduce number
function digitalRoot(num) {
  const numToStr = num.toString();
  let result = 0;
  for (let n of numToStr) {
    result += +n;
  }

  if (result.toString().length === 1) {
    return result;
  } else {
    return digitalRoot(result);
  }
}
console.log(digitalRoot(132189)); // 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
