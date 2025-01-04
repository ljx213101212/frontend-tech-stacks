import { put, takeLatest, delay } from 'redux-saga/effects';
import { addTodo, setTodos } from './actions';

function* fetchTodosSaga() {
    // Simulate an API call with delay
    yield delay(200);
    const todos = ['Learn Redux-Saga', 'Build a Todo App', 'Master Next.js']; // Simulated response
     for (let i = 0; i < todos.length; i++) {
        yield put(addTodo(todos[i]))
     }
  }
export default fetchTodosSaga;
  