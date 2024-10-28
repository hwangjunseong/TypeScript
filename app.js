console.log('Starting lite-server');
//as 키워드로 어떤 유형의 타입인지 알려줌
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
//TS가 지원하는 BUILTIN 유형 중 하나 HTMLButtonElement
//typescript가 알아서 유형을 추론할 수 있다
//buttonElement:HTMLButtonElement
//typescript는 buttonElement가 존재하는지 찾지않는다
var buttonElement = document.querySelector('button'); //null인 경우인지 체크
//배열안에 가지는 값의 유형 저장
// const numResults: number[] = []; //숫자로 이뤄진 배열
var numResults = []; //숫자로 이뤄진 배열
var textResults = []; //문자열로 이뤄진 배열
//use strict일때 한개의 매개변수에 대해 any 설정하는거 허용안됨
//any => 데이터유형에 대해 모를 떄
// function add(num1: any, num2: number) {
// function add(num1: number, num2: number) {
// function add(num1: any, num2: any) {
//union type => number이거나 string
// function add(num1: NumOrString, num2: NumOrString) {
//   //type guard
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     return num1 + num2;
//   } else if (typeof num1 === 'string' && typeof num2 === 'string') {
//     return num1 + ' ' + num2;
//   }
//   //문자열과 숫자가 섞여 있다면 둘 다 숫자로 변환
//   return +num1 + +num2;
// }
//매개변수가 객체 타입
//object가 value 속성을 가진다 {}하고 객체의 구조 정의 => type
//Date는 js builtin 생성자 함수
function printResult(resultObj) {
    console.log(resultObj.val);
}
// console.log(add(1, 6));
//문자열을 전달하는 것을 방지하기위해
// typescript파일에 변수나 매개변수 등의 유형 추가
// console.log(add("1", "6"));
// buttonElement.addEventListener('click', () => {
//   const num1 = num1Element.value;
//   //value는 반드시 문자열을 반환한다 사용자가 숫자를 입력했어도
//   const num2 = num2Element.value;
//   //문자열을 숫자로하기위한거 + => type conversion(형 변환)
//   const result = add(+num1, +num2);
//   numResults.push(result as number);
//   //string
//   const StringResult = add(num1, num2);
//   textResults.push(StringResult as string);
//   console.log(result);
//   console.log(StringResult);
//   printResult({ val: result as number, timestamp: new Date() });
//   console.log(textResults, numResults);
// });
//es6 js임, promise가 resolve할 유형을 정해줘야함
//모든 builtin 객체에 대해 유형을 정해줄 수는 없다
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('it worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w')); //w 기준으로 나눔
});
