import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: false };

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    deleteTodoStart: (state) => {
      state.loading = true;
    },
    addTodoStart: (state) => {
      state.loading = true;
    },
    checkBoxStart: (state) => {
      state.loading = true;
    },
    updateTodoStart: (state) => {
      state.loading = true;
    },

    //reducers(functional)

    setTodos: (state, action) => {
      (state.items = action.payload), (state.loading = false);
    },
    deleteTodos: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },

    addTodo: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },

    updateCheckbox: (state, action) => {
      const { id, completed } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = completed;
      }
      state.loading = false;
    },

    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
      }
      state.loading = false;
    },
  },
});

export const {
  addTodo,
  setTodos,
  fetchStart,
  deleteTodos,
  deleteTodoStart,
  addTodoStart,
  checkBoxStart,
  updateCheckbox,
  updateTodoStart,
  updateTodo,
} = todoSlice.actions;
