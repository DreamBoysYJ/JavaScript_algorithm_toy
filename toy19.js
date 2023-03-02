const LPS = function (str) {
  // 1. regExp 사용한 개 얌생이 case
  // const result = str.match(/^(\w*).*\1$/);
  // return result[1].length;

  // 2. basic solution

  // 1. 반으로 쪼개기

  let prefix = str.slice(0, Math.ceil(str.length / 2));
  let suffix = str.slice(Math.floor(str.length / 2));

  let answer = 0;

  // 2. suffix 마지막 글자를 prefix에서 찾을 수 있니?
  for (let i = prefix.length - 1; i >= 0; i--) {
    if (suffix[suffix.length - 1] == prefix[i]) {
      answer++;
    }
  }

  return answer;
};

console.log(LPS("codecodecode"));
