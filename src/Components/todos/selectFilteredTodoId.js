import { Statuses } from "../footer/filterSlice";

export default function selectFilteredTodoId(state) {
  const todos = state.todo.data;
  const todosVal = Object.values(todos);
  //
  const statusFilter = state.filter.status;
  const colorsFilter = state.filter.colors;
  //
  let filterdIds = [];

  todosVal.forEach((todo) => {
    // //color
    if (colorsFilter.length === 0) {
      filterdIds.push(todo.id);
    } else if (colorsFilter.length !== 0 && colorsFilter.includes(todo.color)) {
      filterdIds.push(todo.id);
    }

    // //status
    switch (statusFilter) {
      case Statuses.All:
        filterdIds.push(todo.id);
        break;
      case Statuses.Active:
        if (!todo.completed) {
          filterdIds.push(todo.id);
        }
        break;

      case Statuses.Completed:
        if (todo.completed) {
          filterdIds.push(todo.id);
        }
        break;
      default:
        break;
    }
  });

  //remove none-duplicate(1-from status / 2-from color) ids
  filterdIds = filterdIds.filter((currentValue, currentIndex) => {
    //first
    return filterdIds.indexOf(currentValue) !== currentIndex;
  });
  return filterdIds;
}
