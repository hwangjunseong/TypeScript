"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// //정렬하고자 하는 데이터를 가진 객체
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data); //aabXy
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(50);
linkedList.add(0);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
