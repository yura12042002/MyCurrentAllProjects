import { configureStore } from "@reduxjs/toolkit";
import simpleTodoSlice from "../features/simpleTodo/simpleTodoSlice";
import wordSlice from "../features/word/wordSlice";
import filmsSlice from "../features/films/filmsSlice";
import adressBookSlice from "../features/adressBook/adressBookSlice";
import hardTodoSlice from "../features/hardTodo/hardTodoSlice";
import coffeeSlice from "../features/coffee/coffeeSlice";
import fromsSlice from "../features/forms/formsSlice";
import modalSlice from "../features/modal/modalSlice";
import natificationSlice from "../features/natification/natificationSlice";

export const store = configureStore({
  reducer: {
    simpleTodo: simpleTodoSlice,
    words: wordSlice,
    films: filmsSlice,
    books: adressBookSlice,
    hardTodo: hardTodoSlice,
    basket: coffeeSlice,
    list: fromsSlice,
    content: modalSlice,
    strings: natificationSlice,
  },
});
