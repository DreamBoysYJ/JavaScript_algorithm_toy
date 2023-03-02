/* function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.

  let num = base;

  for (let i = 1; i < exponent; i++) {
    num = num * base;
    num = num % 94906249;
  }

  return num;
} */

function power(base, exponent) {
  if (exponent === 0) return 1;

  // 2의 4제곰이면
  // half = 2
  const half = parseInt(exponent / 2);
  console.log(half);
  // temp = 2의 2제곱
  // result = 2의 2제곱 x 2의 2제곱 = 2의 4제곱
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  // 홀수면
  if (exponent % 2 === 1) return (base * result) % 94906249;
  // 짝수면 바로 던져
  else return result;
}

let output = power(4, 3);
console.log(output); // --> 19334827
