import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.data);
  const todosId = Object.keys(todos);

  const renderedListItems = todosId.map((id) => {
    return <TodoListItem key={id} todo={todos[id]} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
