"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //28/10/2018
    //dateParts는  const dateParts: number[]
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value, 10);
    });
    //ex => new Date(2024, 0, 15) => 2024년 Jan 15
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
