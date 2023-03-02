const balancedBrackets = function (str) {
  var isTrue;
  // 빈 문자열 > true
  if (str.length == 0) {
    isTrue = true;
    return Boolean(isTrue);
  }
  // 시작이 ) or 홀수 개 > false
  else if (str[0] === ")" || str.length % 2 == 1) {
    isTrue = false;
    return Boolean(isTrue);
  }

  // 시작이 ( and 짝수 개
  else {
    // 한 개씩 잘라 배열로 만들기
    let arr = str.split("");
    console.log(arr);

    // 맨 앞의 ( 와 처음 나오는 )를 지워주기

    // ( 빼기
    let headCut = arr.slice(1);
    console.log(headCut);
    let closeIndex = headCut.indexOf(")");
    // )가 하나도 없으면 짝이 안 맞음으로 false
    if (closeIndex == null) {
      return false;
    }

    // )만  빼기
    headCut.splice(closeIndex, 1);
    console.log(headCut);

    // 배열 내부에 아무것도 없다면 true (없어도 다시 재귀로 보내주면 맨 위에서 처리됨, 확인용으로 지우지 않음)
    if (headCut.length === 0) {
      console.log(
        "if 내부로 들어왔어요, 근데 리턴 true가 아니라 undefined로 나와요..."
      );
      isTrue = true;
      return "왜??";
    }
    // 남은 배열을 다시 문자열로 만들어서 다시 함수에 넣어주기
    else {
      console.log("한번 더 돌리세요");
      let newStr = headCut.join("");
      console.log(String(newStr));
      balancedBrackets(newStr);
    }

    return headCut === [];
  }

  // 종류는 2개 >  "(""  , ")"
  // 짝이 맞아야함 > "(" 10개 , ")" 10개
  // "(" 얼마든지 있어도 되는데, ")"는 앞에 없는데 있으면 안됨

  // 짝 찾으면 삭제해가는 방법으로 해볼까
  // 0개 남으면 true, 아니면 전부 false
};

console.log(balancedBrackets(")()()()(")); // // -> false
