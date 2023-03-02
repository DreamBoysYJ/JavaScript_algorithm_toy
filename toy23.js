const spiralTraversal = function (matrix) {
  // 각 방향 마다 row, col의 변화 저장

  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];

  // 각 방향을 위한 lookup table
  const MOVES = [RIGHT, DOWN, LEFT, UP];
  const M = matrix.length;
  const N = matrix[0].length;
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

  let cnt = 0;
  let row = 0,
    col = -1;
  let direction = 0;
  let result = "";

  // 모든 점을 돌 때 까지 계속 가는거지
  while (cnt < M * N) {
    const move = MOVES[direction];
    const [rd, cd] = move;

    row = row + rd;
    col = col + cd;

    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];

      matrix[row][col] = false;
      row = row + rd;
      col = col + cd;
      cnt++;
    }

    // 행렬의 범위를 벗어났기 때문에
    // 다시 돌아가
    row = row - rd;
    col = col - cd;

    // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
    direction = (direction + 1) % 4;
  }
  return result;
};
