const merge = function (left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIndex >= left.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    } else if (
      rightIndex >= right.length ||
      left[leftIndex] <= right[rightIndex]
    ) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  return merged;
};

let output = mergeSort([3, 1, 4, 21]);
console.log(output); // --> [1, 3, 21]
