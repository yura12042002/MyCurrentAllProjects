import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordList: [],
};

export const wordSlice = createSlice({
  name: "wordList",
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.wordList.push(action.payload);
    },
    changeCard: (state, action) => {
      state.wordList = state.wordList.map((el) => {
        if (action.payload === el.id) {
          return { ...el, isShowTranslate: !el.isShowTranslate };
        }
        return el;
      });
    },
    removeWord: (state, action) => {
      state.wordList = state.wordList.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addWord, changeCard, removeWord } = wordSlice.actions;
export default wordSlice.reducer;