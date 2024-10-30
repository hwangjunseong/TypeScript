// interface Sortable {
//   //인터페이스와 실제 구현에서 인수의 이름이 같을 필요는 없다
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  //ts에게 미래에 존재할 메서드 정의해줌 => abstract 사용해서 특정 방법을 표시
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  //   collection: number[];
  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }
  //위아래 동일, union
  //   constructor(public collection: Sortable) {}
  sort(): void {
    //비구조화 => this.collection.length
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // swap
          this.swap(j, j + 1);
        }
      }
    }
  }
}
