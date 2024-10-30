"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        console.log(characters);
        // const characters: string[]
        // this.data.split('')는 this.data(문자열)를 한 글자씩 나누어 배열로 반환하기 때문에 string[] 타입
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        //이후 다시 합침
        this.data = characters.join('');
        // console.log(this.data);
    }
}
exports.CharactersCollection = CharactersCollection;
