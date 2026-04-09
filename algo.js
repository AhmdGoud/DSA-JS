// recursion => function calls itself
// it has 2 cases => # Base case and # Recursive case

// Types of Recursion:
// Direct Recursion: Function calls itself directly.
// Indirect Recursion: Function A calls Function B, which calls Function A.
// Tail Recursion: Recursive call is the last operation in the function, allowing some optimizations

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
  }

  if (word[0] === word[word.length - 1]) {
    let sliced = word.slice(1, word.length - 1);
    return checkWord(sliced);
  } else {
    return "not plaindrome";
  }
}
console.log(checkWord("racecar"));
