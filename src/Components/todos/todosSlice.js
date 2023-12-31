import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../Redux/initialState";

//make a todoSlice => (state) in this page is equal (state.todo) in global
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
    allTodosCompleted(state) {
      const keys = Object.keys(state.data);
      keys.forEach((key) => {
        state.data[key].completed = true;
      });
    },
    noneTodosCompleted(state) {
      const keys = Object.keys(state.data);
      keys.map((key) => (state.data[key].completed = false));
    },
  },
});

//
//export action and reducer
export const getInitialState = todoSlice.getInitialState();

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  SelectTodoColor,
  allTodosCompleted,
  noneTodosCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
