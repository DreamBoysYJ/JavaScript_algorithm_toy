const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      //부등호 수 찾은 경우(다 끝난 경우)
      return parseInt(nums.join(""));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      //숫자를 차례대로 검토한다.
      // max는 9부터 , min은 0부터
      const right = digits[i];
      // 이저 단게에서 쓴 거면 버려
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우 조건이 중요
      if (idx >= 0) {
        // 항상 바로 직전 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === "<" && left >= right) continue;
        if (sign === ">" && left <= right) continue;
      }

      //조건을 만족시키거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수 이미 찾은 경우 탐색을 멈추자
        return target;
      }
      //탐색에 실패한 경우, 시도한 숫자의 상태(사용중)을 원래대로(사용안함)으로 바꿔놓아야
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(" ");
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place함수(데이터 직접 변경)이므로 min먼저 하고 뒤집어야 된다,
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};

output = inequalityNumber("< >");
console.log(output); // --> 876 (897 - 021)
