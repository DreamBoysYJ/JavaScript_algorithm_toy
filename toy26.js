/* // 기본 답안
const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.

  let max = -10000;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > max) max = sum;

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }
  }
  return max;
}; */

const LSCS = function (arr) {
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) max = sum;

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

let output = LSCS([1, 2, 3, -4, -5, -9, 15, 13]);
console.log(output); // --> 6 ([1, 2, 3])
