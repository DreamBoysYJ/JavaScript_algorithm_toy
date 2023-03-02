const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // 1. 개막장 솔루션, 정답은 나오는데 테스트 오류남
  /*   const arr = arr1.concat(arr2);

  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[k - 1]; */
  // 2. 베이직 솔루션
  /* let left = 0;
  let right = 0;
  let index = 0;
  let target;

  while (index < k) {
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } else {
      target = arr2[right];
      right++;
    }
    index++;
  }

  return target; */
  // 3. 이진 배열 탐색에 시간 복잡도 O(logN)인 advance solution
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8
