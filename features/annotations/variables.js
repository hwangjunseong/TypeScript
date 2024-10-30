"use strict";
//type annotation에 관한 코드 작성
//원시 타입, 객체 타입에 대해 type annotation 가능
const apples = 5;
//ts에게 사과 변수에만 타입 number 값을 할당한다고 말함
//apple은 항상 number를 참조
const apple = 5; //type annotation 형식을 지워도 여전히 nubmer
let speed = 'fast';
// 다른 유형의 값을 할당하려고 하면 오류남
let hasName = false;
let nothingMuch = null;
let nothing = undefined;
//빌트인 객체
let now = new Date();
//배열
let colors = ['red', 'green', 'blue'];
// string[] : 배열이라는 것을 알려주는거지 배열을 생성하지 않음,
//colors에 할당된 무엇인가 있다는거
let myNumbers = [1, 2, 3];
let truth = [true, true, false];
//class
class Car {
}
//Car의 인스턴스 생성
//type이 Car임
let car = new Car();
//object literal
// 세미콜론으로 다른 속성 이름 분리
let point = {
    x: 10,
    y: 20,
};
//Function
//ts에게 함수에 관한 정보 알려줌
//i를 인수로 받아야 하고, 함수의 반환형은 void이다
//annotation  부분 : (i: number) => void
//ts에게 이 변수에 어떤 형식의 값을 할당할지 알려주는 거
//실제 함수 :  = (i: number) => {  console.log(i);};
const logNumber = (i) => {
    console.log(i);
};
//언제 type annotations을 추가해야 함?
//1 함수가 any type return 할 때
const json = '{"x" : 10 , "y" : 20}';
const coordinates = JSON.parse(json); //JSON.parse가 any type을 반환함
//any type : JSON에서 어떤 유형의 값이 반환되는지 Typescript는 모름
console.log(coordinates);
//2 한줄에 변수 선언 다른 줄에 변수 초기화
let words = ['red', 'green', 'yellow'];
let foundWord; // annotation 추가
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green')
        foundWord = true;
}
//3 variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0)
        numberAboveZero = numbers[i]; // error: Type 'boolean' is not assignable to type 'number'.
}
