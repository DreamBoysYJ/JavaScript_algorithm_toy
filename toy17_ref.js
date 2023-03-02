const balancedBrackets = function (str) {
  const stack = [];
  const opener = "(";
  const closer = ")";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === opener) {
      stack.push(str[i]);
    } else if (str[i] === closer) {
      const top = stack.pop();
      if (top !== opener) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
