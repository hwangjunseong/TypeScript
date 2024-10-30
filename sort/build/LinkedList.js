"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; //next는 다음 노드를 가리키거나 마지막에도 도달해서 null임
    } //value, next
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    //void여도 return문 사용가능
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        //tail.next가 null일때까지
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    //찾는 인덱스에 대한 노드를 반환
    at(index) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        let counter = 0;
        //type annotation 추가
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('list is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    //노드에 들어있는데 data만 바꿔주면됨
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
            //node는 항상 참조 노드나 null로 감 => type annotation 해줘야함
        }
    }
}
exports.LinkedList = LinkedList;
