const quickSort = function (arr) {
  if (arr.length == 0 || arr.length == 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > pivot) {
      right.push(arr[index]);
    } else {
      left.push(arr[index]);
    }
  }

  const leftArr = quickSort(left);
  const rightArr = quickSort(right);
  return [...leftArr, pivot, ...rightArr];
};

let output = quickSort([5, 3, 8, 4, 9, 1, 6, 2, 7]);
console.log(output);
