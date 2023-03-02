function countingSort(array) {
  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  const result = [];
  array.forEach((val) => {
    count[val]++;
  });
  for (let i = 0; i < max; i++) {
    // 누적합을 구합니다.
    count[i + 1] += count[i];
  }
  array.forEach((val) => {
    // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를  집어넣습니다.
    result[count[val] - 1] = val;
    count[val]--;
  });
  return result;
}

let answer = countingSort([1, 3, 2, 4, 11, 2, 6, 4, 11, 1, 7]);
console.log(answer);
