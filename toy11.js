const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  // 1. str을 알파벳으로 자르기 (중복 없애고)
  // ex. str = "jjump", arr = ["j", "u", "m", "p"]
  const temp = new Set(str);
  const arr = [...temp];
  arr.sort();
  console.log(arr);

  let answer = [];

  // 조합 함수
  const getCombinations = (arr, count) => {
    let result = [];

    // count=1이면 [1], [2]... 이렇게 모든 거 다 뱉어줘

    if (count === 1) {
      return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, array) => {
      // 고정 뒤 요소들 배열
      const rest = array.slice(index + 1);
      // **가장 어려움, 하나 고정 박았으니 n-1개고, 이 중에서 요구한 count -1 조합 뽑아야 하니까 재귀로 **
      const combinations = getCombinations(rest, count - 1);
      // 이제 붙여
      const attached = combinations.map((combi) => [fixed, ...combi]);
      result.push(...attached);
    });
    // 정답을 배열 안에 담아
    return result;
  };
  console.log(getCombinations(arr, 1));

  // 2. arr 조합 만들기, 1개짜리, 2개짜리...arr.length짜리
  for (let i = 0; i < arr.length; i++) {
    const combi = getCombinations(arr, i + 1);
    answer.push(...combi);
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].join("");
  }
  const final = answer.sort();
  answer = ["", ...final];

  console.log(answer);
};

powerSet("bbaaa");
