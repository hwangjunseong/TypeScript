import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
//매번 Sorter을 이용해 sort하기가 싫음
// //정렬하고자 하는 데이터를 가진 객체
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data); //-5 0 3 10

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data); //aabXy

// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data); //aabXy

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(50);
linkedList.add(0);
linkedList.sort();
linkedList.print(); //-3 0 50 500

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print(); //-3 0 50 500
