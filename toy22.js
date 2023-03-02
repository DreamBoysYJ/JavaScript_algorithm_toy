const rotateMatrix = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.

  // 빈 매트릭스 만들어놓기
  const newMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    newMatrix.push(Array(matrix.length).fill(0));
  }

  // 이중 for문
  for (let i = matrix.length - 1; i > -1; i--) {
    // 끝 배열부터 빈 매트릭스에 push하기
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[j].shift();
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8
