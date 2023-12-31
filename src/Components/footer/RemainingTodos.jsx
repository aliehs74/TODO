import { shallowEqual, useSelector } from "react-redux";
import selectFilteredTodoId from "../todos/selectFilteredTodoId";

const RemainingTodos = () => {
  const filterdIds = useSelector(
    (state) => selectFilteredTodoId(state),
    shallowEqual
  );
  const todos = useSelector((state) => state.todo.data, shallowEqual);
  //
  const remainingTodos = [];
  Object.values(todos).forEach((todo) => {
    if (
      !todo.completed &&
      todo.displayStatus === "" &&
      filterdIds.includes(todo.id)
    ) {
      remainingTodos.push(todo);
    }
  });

  const count = remainingTodos.length;
  //
  let suffix = "";
  if (count === 0 || count === 1) {
    suffix = "";
  } else {
    suffix = "s";
  }
  //
  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

export default RemainingTodos;
