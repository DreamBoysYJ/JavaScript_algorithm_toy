const rotateMatrix = function (matrix) {
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  let output = [];

  for (let row = 0; row < M; row++) {
    output[row] = [];
    for (let col = 0; col < N; col++) {
      output[row][col] = matrix[N - col - 1][row];
    }
  }

  return output;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotateMatrix(matrix);
