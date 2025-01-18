import { all, takeEvery, call, put } from "redux-saga/effects";
import API from "./constants/constant";
import {
  setTodos,
  fetchStart,
  deleteTodos,
  deleteTodoStart,
  addTodoStart,
  addTodo,
  checkBoxStart,
  updateCheckbox,
  updateTodo,
  updateTodoStart,
} from "./slices/todoSlice";

//worker
function* fetchItemsSaga() {
  try {
    const response = yield call(fetch, API.URL_TODO);

    const data = yield response.json();

    yield put(setTodos(data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteItemsSaga(action) {
  try {
    const response = yield call(fetch, `${API.URL_TODO}/${action.payload}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    yield put(deleteTodos(action.payload));
  } catch (e) {
    console.error(e);
  }
}
function* addItemsSaga(action) {
  try {
    const response = yield call(fetch, API.URL_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: action.payload }),
    });

    const data = yield response.json();

    yield put(addTodo(data));
  } catch (e) {
    console.error(e);
  }
}

function* checkBoxTodoSaga(action) {
  try {
    const { id, completed } = action.payload;
    const response = yield call(fetch, `${API.URL_TODO}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });

    const data = yield response.json();

    yield put(updateCheckbox(data));
  } catch (e) {
    console.error(e);
  }
}

function* updateTodoSaga(action) {
  try {
    const { task, id } = action.payload;
    const response = yield call(fetch, `${API.URL_TODO}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    const data = yield response.json();

    yield put(updateTodo(data));
  } catch (e) {
    console.error(e);
  }
}

//watchers
function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

function* watchDeleteTodos() {
  yield takeEvery(deleteTodoStart.type, deleteItemsSaga);
}

function* watchAddTodos() {
  yield takeEvery(addTodoStart.type, addItemsSaga);
}

function* watchCheckBoxTodos() {
  yield takeEvery(checkBoxStart.type, checkBoxTodoSaga);
}

function* watchUpdateTodo() {
  yield takeEvery(updateTodoStart.type, updateTodoSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchDeleteTodos(),
    watchAddTodos(),
    watchCheckBoxTodos(),
    watchUpdateTodo(),
  ]);
}
