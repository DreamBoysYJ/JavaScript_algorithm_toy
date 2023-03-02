const getMaxNumber = (signs, numTable) => {
  let max = "";
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === ">") {
      max += String(numTable.pop());
      console.log("1", max);
    } else {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === "<") count++;
        else break;
      }
      max += String(numTable.splice(numTable.length - 1 - count, 1));
      console.log("3", max);
    }
  }
  max += numTable.pop();
  console.log("2", max);
  return max;
};

const getMinNumber = (signs, numTable) => {
  let min = "";
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "<") {
      min += String(numTable.shift());
    } else {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === ">") count++;
        else break;
      }
      min += String(numTable.splice(count, 1));
    }
  }
  min += numTable.shift();
  return min;
};

const inequalityNumber = function (signs) {
  signs = signs.split(" ");
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer =
    getMaxNumber(signs, number.slice()) - getMinNumber(signs, number.slice());
  return answer;
};

output = inequalityNumber("< > > <");
console.log(output); // --> 876 (897 - 021)
