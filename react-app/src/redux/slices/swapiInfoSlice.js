import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const swapiInfoSlice = createSlice({
  name: "swapiInfo",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = null;
    },
  },
});

export const { setData, clearData } = swapiInfoSlice.actions;

export const fetchData = (path) => async (dispatch) => {
  const response = await fetch(`https://swapi.py4e.com/api/${path}`);
  const data = await response.json();
  dispatch(setData(data));
};
