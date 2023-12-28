import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../Redux/initialState";

//make a todoSlice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo;
    },

    removeTodo(state, action) {
      const todo = action.payload;
      delete state.data[todo.id];
    },

    toggleTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id].completed = !state.data[todo.id].completed;
    },

    SelectTodoColor: {
      reducer(state, action) {
        const { id, color } = action.payload;
        state.data[id].color = color;
      },
      prepare({ id, color }) {
        return {
          payload: {
            id,
            color,
          },
        };
      },
    },
  },
});

//
//export action and reducer
export const { addTodo, removeTodo, toggleTodo, SelectTodoColor } =
  todoSlice.actions;

export default todoSlice.reducer;
