import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const simpleTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    completedTodo: (state, action) => {
      const todo = state.todos.find((el) => el.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, deleteTodo, completedTodo } = simpleTodoSlice.actions;
export default simpleTodoSlice.reducer;
