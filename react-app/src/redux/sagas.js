import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  addProductStart,
  addProduct,
  fetchProduct,
  fetchProductStart,
  updateProductStart,
  updateProduct,
  clearEditingProduct,
  deleteProductStart,
  deleteProduct,
} from "./slices/productSlice";
import axios from "axios";
import apiURL from "../constants/apiURL";
import { closeModal } from "./slices/modalSlice";

const axiosProductApi = (method, url, data = null) => {
  return axios({
    method,
    url,
    data,
    headers: { "Content-Type": "application/json" },
  });
};

//worker

function* addProductSaga(action) {
  try {
    const response = yield call(
      axiosProductApi,
      "post",
      apiURL.URL_TODO,
      action.payload
    );
    yield put(addProduct(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* fetchProductSaga() {
  try {
    const response = yield call(axiosProductApi, "get", apiURL.URL_TODO);
    yield put(fetchProduct(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* updateProductSaga(action) {
  try {
    const response = yield call(
      axiosProductApi,
      "put",
      `${apiURL.URL_TODO}/${action.payload.id}`,
      action.payload
    );

    yield put(updateProduct(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteProductSaga(action) {
  try {
    const response = yield call(
      axiosProductApi,
      "delete",
      `${apiURL.URL_TODO}/${action.payload}`,
      { headers: { "Content-Type": "application/json" } }
    );

    yield put(deleteProduct(action.payload));
  } catch (e) {
    console.error(e);
  }
}

//watcher

function* watchAddProduct() {
  yield takeEvery(addProductStart.type, addProductSaga);
}

function* watchFetchProduct() {
  yield takeEvery(fetchProductStart.type, fetchProductSaga);
}

function* updateFetchProduct() {
  yield takeEvery(updateProductStart.type, updateProductSaga);
}

function* deleteFetchProduct() {
  yield takeEvery(deleteProductStart.type, deleteProductSaga);
}

export default function* rootSaga() {
  yield all([
    watchAddProduct(),
    watchFetchProduct(),
    updateFetchProduct(),
    deleteFetchProduct(),
  ]);
}
