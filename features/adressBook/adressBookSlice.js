import { createSlice } from "@reduxjs/toolkit";
import { arr } from "../../components/theAdressBook/Data";

const initialState = {
  users: arr,
};

export const adressBookSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload]; // не могу запушить превращает массив в число
    },
    editUser: (state, action) => {
      const user = state.users.find((el) => el.id === action.payload);
      user.edit = !user.edit;
    },
    editUserInList: (state, action) => {
      const { value, id, column } = action.payload;
      const user = state.users.find((el) => el.id === id);
      if (user) {
        user[column] = value;
      }
    },
    onClickCheckBox: (state, action) => {
      const user = state.users.find((el) => el.id === action.payload);
      user.check = !user.check;
    },
    allCheckBox: (state, action) => {
      const itemsAllChecked = state.users.every((el) => el.check);
      state.users = state.users.map((el) => {
        if (itemsAllChecked) {
          return { ...el, check: false };
        }
        return { ...el, check: true };
      });
    },
    deleteUser: (state, action) => {
      const { id, edit, oldInformation } = action.payload;
      if (edit) {
        const index = state.users.findIndex((el) => el.id === id);
        state.users[index] = oldInformation;
      } else state.users = [...state.users.filter((el) => el.id !== id)];
    },
    deleteSelectedItems: (state, action) => {
      state.users = [...state.users.filter((el) => !el.check)];
    },
    sortDown: (state, action) => {
      state.users = [...state.users].sort((a, b) => {
        if (action.payload === "age") {
          return parseInt(a[action.payload]) - parseInt(b[action.payload]);
        }
        return a[action.payload].localeCompare(b[action.payload]);
      });
    },
    sortHight: (state, action) => {
      state.users = [...state.users].sort((a, b) => {
        if (action.payload === "age") {
          return parseInt(b[action.payload]) - parseInt(a[action.payload]);
        }
        return b[action.payload].localeCompare(a[action.payload]);
      });
    },
  },
});

export const {
  addUser,
  editUser,
  editUserInList,
  onClickCheckBox,
  allCheckBox,
  deleteUser,
  deleteSelectedItems,
  sortDown,
  sortHight,
} = adressBookSlice.actions;

export default adressBookSlice.reducer;
