import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/circlesAndSquares/data";

const initialState = {
  list: data,
  selectedColors: [
    { isActive: false, value: "red", label: "красный" },
    { isActive: false, value: "green", label: "Зеленые" },
    { isActive: false, value: "blue", label: "Синие" },
    { isActive: false, value: "yellow", label: "Желтые" },
  ],
  selectedShade: [
    { isActive: true, value: "all", label: "Все" },
    { isActive: false, label: "Темные" },
    { isActive: false, label: "Светлые" },
  ],
  selectedFigure: [
    { isActive: false, form: "square", label: "Квадраты" },
    { isActive: false, form: "circle", label: "Круги" },
  ],
};

export const fromsSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    chengeColors: (state, action) => {
      const color = state.selectedColors.find(
        (el) => el.value === action.payload
      );
      color.isActive = !color.isActive;
    },
    chengeShade: (state, action) => {
      state.selectedShade = state.selectedShade.map((el) => {
        if (el.label === action.payload) {
          return { ...el, isActive: true };
        } else return { ...el, isActive: false };
      });
    },
    chengeFigure: (state, action) => {
      const figure = state.selectedFigure.find(
        (el) => el.label === action.payload
      );
      figure.isActive = !figure.isActive;
    },
  },
});

export const { chengeColors, chengeShade, chengeFigure } = fromsSlice.actions;

export default fromsSlice.reducer;
