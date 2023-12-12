import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const coffeeSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      if (
        state.basket.some(
          (elem) =>
            elem.name === action.payload.name &&
            elem.syrop === action.payload.syrop
        )
      ) {
        const item = state.basket.find(
          (elem) =>
            elem.name === action.payload.name &&
            elem.syrop === action.payload.syrop
        );
        item.count += 1;
      } else {
        state.basket.push(action.payload);
      }
    },
    deleteCoffee: (state, action) => {
      const item = state.basket.find(
        (elem) =>
          elem.name === action.payload.name &&
          elem.syrop === action.payload.syrop
      );
      if (
        state.basket.some(
          (elem) =>
            elem.name === action.payload.name &&
            elem.syrop === action.payload.syrop &&
            elem.count > 1
        )
      ) {
        const item = state.basket.find(
          (elem) =>
            elem.name === action.payload.name &&
            elem.syrop === action.payload.syrop
        );
        item.count -= 1;
      } else {
        state.basket = state.basket.filter((el) => el.id !== action.payload);
      }
    },
  },
});

export const { addNewItem, deleteCoffee } = coffeeSlice.actions;
export default coffeeSlice.reducer;
