const robotPath = function (room, src, dst) {
  const aux = (M, N, nowPosition, time) => {
    // 현재 위치
    const [row, column] = nowPosition;

    // 맵을 벗어난 경우
    if (row < 0 || row >= M || column < 0 || column >= N) return;

    // 맵 모든 곳에 time 찍기
    if (room[row][column] === 0 || room[row][column] > time) {
      room[row][column] = time;
    } else {
      return;
    }

    aux(M, N, [row + 1, column], time + 1); // 상
    aux(M, N, [row - 1, column], time + 1); // 하
    aux(M, N, [row, column - 1], time + 1); // 좌
    aux(M, N, [row, column + 1], time + 1); // 우
  };

  aux(room.length, room[0].length, src, 0);

  const [r, c] = dst;
  return room[r][c];
};

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
