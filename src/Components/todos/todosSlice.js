import { createSlice } from "@reduxjs/toolkit"

// 
//make initialState
const initialState = {
  data: {
    1: { id: 1, text: 'Deign ui', completed: true, color: 'red' },
    2: { id: 2, text: 'discover state', completed: false },
    3: { id: 3, text: 'discover actions', completed: true },
    4: { id: 4, text: 'implement reducer', completed: false, color: 'blue' },
    5: { id: 5, text: 'Complete patterns', completed: false, color: 'green' },
  }
}
// 
//make a todoSlice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
    removeTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
    toggleTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
    colorSelect(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
    allTodoCompleted(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
    noneTodoCompleted(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo
    },
  },
})

// 
//export action and reducer
export const {
  addTodo,
  removeTodo,
  toggleTodo,
  colorSelect,
  allTodoCompleted,
  noneTodoCompleted } = todoSlice.actions

export default todoSlice.reducer