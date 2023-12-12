import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const natificationSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.list.push(action.payload)
    },
    removeNotification: (state, action) => {
      state.list = state.list.filter(el => el.id !== action.payload)
    }
  }
})

export const {addNotification, removeNotification} = natificationSlice.actions

export default natificationSlice.reducer