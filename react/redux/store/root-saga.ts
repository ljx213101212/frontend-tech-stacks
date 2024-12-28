import { all, takeLatest } from "redux-saga/effects";
import { FETCH_TODOS } from "../features/todos/actionTypes";
import { helloSaga } from "../features/hello-saga/saga";
import fetchTodosSaga from "../features/todos/saga";
import { SAY_HELLO } from "../features/hello-saga/actionTypes";

export default function* rootSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga);
  yield takeLatest(SAY_HELLO, helloSaga);
}