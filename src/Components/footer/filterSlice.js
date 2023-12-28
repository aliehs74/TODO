import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../Redux/initialState";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
//make a FilterSlice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    allTodosCompleted(state) {
      const keys = Object.keys(state.data);
      keys.map((key) => (state.data[key].completed = true));
    },

    noneTodosCompleted(state) {
      const keys = Object.keys(state.data);
      keys.map((key) => (state.data[key].completed = false));
    },
    
    statusFilter: {
      reducer(state, action) {
        const { status } = action.payload;
        const keys = Object.keys(state.data);
        //  // displayStatus = "" ==> show item
        if (status === "All") {
          keys.forEach((key) => {
            state.data[key].displayStatus = "";
          });
        }
        if (status === "Active") {
          keys.forEach((key) => {
            state.data[key].completed === false
              ? (state.data[key].displayStatus = "")
              : (state.data[key].displayStatus = "none");
          });
        }

        if (status === "Completed") {
          keys.forEach((key) => {
            state.data[key].completed === true
              ? (state.data[key].displayStatus = "")
              : (state.data[key].displayStatus = "none");
          });
        }
      },

      prepare(status) {
        return { payload: { status } };
      },
    },
  },

  colorFilter: {
    reducer(state, action) {
      const { color } = action.payload;
      const keys = Object.keys(state.data);

      keys.forEach((key) => {
        state.data[key].color === color
          ? (state.data[key].displayStatus = "")
          : (state.data[key].displayStatus = "none");
      });
    },

    prepare(color) {
      return { payload: { color } };
    },
  },
});

//
//export action and reducer
export const {
  allTodosCompleted,
  noneTodosCompleted,
  statusFilter,
  colorFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
