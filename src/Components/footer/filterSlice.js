import { createSlice } from "@reduxjs/toolkit";
export const Statuses = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
const initialState = {
  status: Statuses.All,
  colors: [],
};
//make a FilterSlice => (state) in this page is equal (state.filter) in global
const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    statusFilter(state, action) {
      state.status = action.payload;
    },

    colorFilter(state, action) {
      if (state.colors.includes(action.payload.color)) {
        state.colors.splice(state.colors.indexOf(action.payload.color), 1);
      } else {
        state.colors.push(action.payload.color);
      }
    },
  },
});
//
//

//
//export action and reducer
export const { statusFilter, colorFilter } = filterSlice.actions;

export default filterSlice.reducer;
