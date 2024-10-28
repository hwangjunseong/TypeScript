import fetch from 'node-fetch';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // 응답 데이터 처리
//     console.log(data);
//   })
//   .catch((error) => {
//     // 에러 처리
//     console.error(error);
//   });
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logToTodo(id, title, completed);
  //   console.log(id, title, completed);
});
const logToTodo = (id: number, title: string, completed: boolean) => {
  console.log(`ID: ${id}, Title: ${title}, Completed: ${completed}`);
};
