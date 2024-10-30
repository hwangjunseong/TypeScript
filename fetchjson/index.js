"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then((response) => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logToTodo(id, title, completed);
    //   console.log(id, title, completed);
});
const logToTodo = (id, title, completed) => {
    console.log(`ID: ${id}, Title: ${title}, Completed: ${completed}`);
};
