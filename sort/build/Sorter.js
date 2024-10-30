"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //   collection: number[];
    //   constructor(collection: number[]) {
    //     this.collection = collection;
    //   }
    //위아래 동일, union
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        //비구조화 => this.collection.length
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    // swap
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
