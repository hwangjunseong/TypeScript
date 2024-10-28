//인수로 받을 2개의 변수에 대한 타입 추가
//return type을 추가안하면 void
const addNum = (a: number, b: number): number => {
  return a + b;
  //ts는 함수 안의 실제 로직을 검토하고 올바른 걸 하는지 확인하지 않음 a-b해도 모름
};
//인자에 대해선 type inference 못함
//출력에 대해선 type inference 작동
//반환형 void임
const subtractvoid = (a: number, b: number) => {
  a - b;
};
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}
//익명 함수로 annotation
const multiply = function (a: number, b: number): number {
  return a * b;
};
const logger = (message: string): void => {
  console.log(message);
  //   return null;
  return undefined;
};
//void , never
const throwErrornever = (message: string): never => {
  throw new Error(message);

  // never : 함수의 끝까지 갈 수 없다 , 일찍 종료
};
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//destructing with annotations
//object literal
const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todayWeather);
//es2015 => { date, weather } destructing 구조에서는 type을 붙이지 않음
const logweather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
