const carMakers: string[] = ['ford', 'toyota', 'chevy'];
//ts가 배열 안의 요소들을 보고 타입 추론을 함
//배열 안에 요소가 없고 annotation이 없다면 타입 추론 불가(any)
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//help with inference when extracting values
const car0 = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types => multiple type
const importantDates: (Date | string)[] = [new Date(), '2024-10-28'];
importantDates.push('2024-10-29');
importantDates.push(new Date());
