import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://654bd5555b38a59f28efc790.mockapi.io/api/v1/list";

const initialState = {
  todos: [],
};

export const getPosts = createAsyncThunk(
  "todos/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(url);
      dispatch(setTodos(res.data));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPost = createAsyncThunk(
  "todos/addPost",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(`${url}`, {
        task: text,
        completed: false,
      });
      dispatch(getPosts());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const completedPost = createAsyncThunk(
  "todos/copletedPost",
  async ({ id, todo }, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`${url}/${id}`, {
        completed: !todo.completed,
      });
      dispatch(getPosts());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoDelete = createAsyncThunk(
  "todos/todoDelete",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${url}/${id}`);
      dispatch(getPosts());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoEdit = createAsyncThunk(
  "todos/todoEdit",
  async ({ id, newTitle }, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`${url}/${id}`, {
        task: newTitle,
      });
      dispatch(getPosts());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const hardTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});


export const { setTodos } = hardTodoSlice.actions;
export default hardTodoSlice.reducer;