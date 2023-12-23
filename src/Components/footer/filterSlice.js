import { createSlice } from "@reduxjs/toolkit"
import initialState from "../../Redux/initialState"

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

    statusFilter(state, action) {
      const filter = action.payload;
      state.data[filter.id] = filter
    },
    colorFilter(state, action) {
      const filter = action.payload;
      state.data[filter.id] = filter
    },


    // SelectFilterColor: {
    //   reducer(state, action) {
    //     const { id, color } = action.payload;
    //     state.data[id].color = color
    //   },
    //   prepare({ id, color }) {
    //     return {
    //       payload: {
    //         id,
    //         color
    //       }
    //     }
    //   },
    // },

  },
})

// 
//export action and reducer
export const { statusFilter, colorFilter } = filterSlice.actions

export default filterSlice.reducer