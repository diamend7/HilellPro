import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from "history";
import { productSlice } from "./slices/productSlice";
import modalSlice from "./slices/modalSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const store = configureStore({
  reducer: {
    router: routerReducer,
    products: productSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    sagaMiddleware,
    routerMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
