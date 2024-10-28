var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// !는 타입스크립트에게 null을 내주지 않을 거라고 알리는 것
// as HTMLInputElement 형 변환 구문 => 타입스크립트에게 어떤 타입인지 알려줌
// 타입스크립트 컴파일러가 알아듣게 타입을 적어줌
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  //   타입스크립트는 프로퍼티가 존재하는지 모름
  //   타입스크립트는 html 코드를 분석해서 제대로 되는지 확인안함
  console.log(add(+input1.value, +input2.value));
});
