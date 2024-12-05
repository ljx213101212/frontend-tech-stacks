### Generator

enabling pausable functions that can yield values and resume execution later.
offering a powerful tool for managing complex control flows in JavaScript.

### Real world applications

- Redux Saga

```javascript
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from "./actions";

// Simulated API call
const fetchUserApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });

// Generator function to handle the side effect
function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserApi); // Call the API
    yield put(fetchUserSuccess(user)); // Dispatch success action
  } catch (error) {
    yield put(fetchUserFailure(error.message)); // Dispatch failure action
  }
}

// Watcher saga
function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}

export default userSaga;
```
