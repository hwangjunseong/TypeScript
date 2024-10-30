"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name : ${this.name}`;
    },
};
const drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar `;
    },
};
const printSummary = (item) => {
    //   console.log(`Name: ${item.name}`);
    //   console.log(`Year: ${item.year}`);
    //   console.log(`Broken: ${item.broken}`);
    console.log(item.summary()); //summary() 함수 호출
};
//단일 인터페이스를 이용해 서로 다른 물체의 형태나 속성을 묘사할 수 있음
printSummary(drink1);
printSummary(oldCivic);
