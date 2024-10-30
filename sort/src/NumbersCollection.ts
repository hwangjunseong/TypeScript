import { Sorter } from './Sorter';
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    //부모 클래스의 생성자에 대한 참조
    super();
  }
  //getter
  get length(): number {
    return this.data.length;
  }
  //비교가 참이면 swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
// const collection = new NumbersCollection([1, 2, 3]);
//키워드 get을 넣어서 함수처럼 collection.length() 할필요없음
// collection.length;
