//일반적인 이름으로 interface 만듬, 재사용하려고
interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string; //summary 함수의 반환 유형
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};
const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar `;
  },
};
type Drink1 = [string, boolean, number];
const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${item.name}`);
  //   console.log(`Year: ${item.year}`);
  //   console.log(`Broken: ${item.broken}`);
  console.log(item.summary()); //summary() 함수 호출
};
//단일 인터페이스를 이용해 서로 다른 물체의 형태나 속성을 묘사할 수 있음
printSummary(drink1);
printSummary(oldCivic);
