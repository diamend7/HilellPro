import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { swapiInfoSlice } from "./slices/swapiInfoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    swapiInfo: swapiInfoSlice.reducer,
  },
});
