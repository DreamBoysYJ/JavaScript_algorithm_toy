function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  // 요소 중 가장 긴 자리 수 구하기
  const maxDigits = mostDigits(arr);

  // 0~ 가장 긴 자리 수 까지 반복
  for (let k = 0; k < maxDigits; k++) {
    // 각 자리수에 해당하는 숫자를 담을 그릇 만들기
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // 각 요소를 맞는 그릇에 담기
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    //각 그릇에 담긴 값들을 합쳐서 배열로 만들어야
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
