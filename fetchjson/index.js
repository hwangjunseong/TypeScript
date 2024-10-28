"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Starting lite-server');
var node_fetch_1 = require("node-fetch");
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
(0, node_fetch_1.default)(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    // 응답 데이터 처리
    console.log(data);
})
    .catch(function (error) {
    // 에러 처리
    console.error(error);
});
axios_1.default.get(url).then(function (response) {
    console.log(response);
});
