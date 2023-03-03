// 두 변수를 바꾸는 방법
function swap(idx1, idx2, arr) {
  // 1. 임시 변수 활용
  // let temp = idx1;
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2. Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3. XOR 연산을 활용한 방법
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // 일단 item을 끝에 넣어
  heap.push(item);
  // item 부모와 크기 비교해서 크면 바꾸고, 그렇게 맨 위까지 해봐
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    // 바뀌면 그 위 놈이랑 비교해야 하니까 세팅 다시 해줘야지
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]
