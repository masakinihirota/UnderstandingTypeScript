// any型だとエラーになる。
// function add2(n1, n2) {


function add2(n1: number, n2: number) {
  return n1 + n2;
}

const number10 = 5;
// const number1 = "5";

const number20 = 2.8;

const result2 = add2(number10, number20);
console.log(result2);
