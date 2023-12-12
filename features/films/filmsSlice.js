import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  film: null,
};

export const getFilms = createAsyncThunk(
  "list/getFilms",
  async (page, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit: 6,
        page: page,
      },
    });
    dispatch(setList(res.data.data.movies));
  }
);

export const getFilm = createAsyncThunk(
  "list/getFilm",
  async (id, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    dispatch(setFilm(res.data.data.movie));
  }
);

export const filmsSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setFilm: (state, action) => {
      state.film = action.payload;
    },
  },
});

export const { setList, setFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
