import { Statuses } from "../footer/filterSlice";

export default function selectFilteredTodo(state) {
  const todos = state.todo.data;
  const statusFilter = state.filter.status;
  const colorsFilter = state.filter.colors;

  let filterdTodos = {};

  if (statusFilter === Statuses.All && colorsFilter.length === 0) {
    filterdTodos = todos;
  }
   if (statusFilter === Statuses.Active && colorsFilter.length === 0) {
     filterdTodos = todos;
   }
    if (statusFilter === Statuses.Completed && colorsFilter.length === 0) {
      filterdTodos = todos;
    }

  return filterdTodos;
}
