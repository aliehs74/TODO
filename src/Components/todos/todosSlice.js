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
      delete state.data[todo.id]
    },

    toggleTodo(state, action) {
      const todo = action.payload;
      state.data[todo.id].completed = !state.data[todo.id].completed
    },

    SelectTodoColor: {
      reducer(state, action) {
        const { id, color } = action.payload;
        state.data[id].color = color
      },
      prepare({ id, color }) {
        return {
          payload: {
            id,
            color
          }
        }
      },
    },

    allTodosCompleted(state) {
      const keys = Object.keys(state.data)
      keys.map(key => state.data[key].completed = true)
    },

    noneTodoCompleted(state) {
      const keys = Object.keys(state.data)
      keys.map(key => state.data[key].completed = false)
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