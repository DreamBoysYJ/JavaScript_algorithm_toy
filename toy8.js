const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 조합 함수
  const getCombination = (array, count) => {
    let result = [];

    if (count === 1) {
      return array.map((value) => [value]);
    }

    array.forEach((fixed, index, array) => {
      const rest = array.slice(index + 1);
      const combi = getCombination(rest, count - 1);

      const attached = combi.map((com) => [fixed, ...com]);
      result.push(...attached);
    });
    return result;
  };

  // 3개 뽑은 모든 조합 케이스
  const pickThree = getCombination(arr, 3);
  console.log(pickThree);

  // 배열 곱하는 함수
  const multi = (arr) => {
    return arr.reduce((acc, cur) => acc * cur);
  };

  // 내부 요소 다 곱해
  // [ [ -1, 2, -5 ], [ -1, 2, 7 ], [ -1, -5, 7 ], [ 2, -5, 7 ] ]
  for (let i = 0; i < pickThree.length; i++) {
    multi(pickThree[i]);
  }
  console.log(pickThree);

  for (let i = 0; i < pickThree.length; i++) {
    pickThree[i] = pickThree[i].reduce((acc, cur) => {
      return acc * cur;
    });
  }

  console.log(pickThree);

  return Math.max(...pickThree);

  // 그중 Math.max로 뽑아
};

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output);
