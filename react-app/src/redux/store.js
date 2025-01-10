import { configureStore } from "@reduxjs/toolkit";
import { swapiInfoSlice } from "./slices/swapiInfoSlice";

export const store = configureStore({
  reducer: {
    swapiInfo: swapiInfoSlice.reducer,
  },
});
