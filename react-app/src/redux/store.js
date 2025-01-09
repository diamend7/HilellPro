import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices/counter";
import { todoSlice } from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
    todos: todoSlice.reducer,
  },
});
