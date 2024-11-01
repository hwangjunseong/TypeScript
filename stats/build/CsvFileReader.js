"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
//MatchData처럼 하드코딩하는 대신 제너릭 사용
//T는 제너릭 형식에 대한 참조임
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // data: string[][] = [];
        // data:  MatchData[] = [];
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
            flag: 'r',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
