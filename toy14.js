/* const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
  
  
    for(let index = 0 ; index < rotated.length ; index++) {
      if(rotated[index] === target){
          
          return index;
      }
    }
  
    return -1;
  
  }; */

// 이진 배열 탐색 적용해 시간복잡도 O(logN)으로 구현하라
const rotatedArraySearch = function (rotated, target) {
  let start = 0;
  let end = rotated.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (rotated[mid] == target) {
      return mid;
    }

    if (rotated[start] < rotated[end] && target < rotated[mid]) {
      end = mid - 1;
    } else if (rotated[start] < rotated[end] && target > rotated[mid]) {
      start = mid + 1;
    } else if (rotated[start] > rotated[end] && target <= rotated[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
