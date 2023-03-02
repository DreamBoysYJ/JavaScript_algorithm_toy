const rotateMatrix = function (matrix, rotateNum = 1) {
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  // 4의 배수면 그대로
  if (rotateNum == 0) return matrix;

  const rotated = [];
  // 홀수면 M X N, 짝수면 N X M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum == 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }
  return rotated;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const rotatedMatrix = rotateMatrix(matrix, 2);
console.log(rotatedMatrix[0][0]); // --> 20
console.log(rotatedMatrix[3][2]); // --> 8
