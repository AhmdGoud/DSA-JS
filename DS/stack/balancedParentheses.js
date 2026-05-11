function isBalanced(expression) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of expression) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      //
    } else if (char in pairs) {
      if (!stack.length) return false;

      if (stack[stack.length - 1] === pairs[char]) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("[()]")); // true
console.log(isBalanced("{[()]")); // false
