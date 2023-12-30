import { availableColors, capitalize } from "./colorProcess";
import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { SelectTodoColor, removeTodo, toggleTodo } from "./todosSlice";

const TodoListItem = ({ filterdId }) => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.data[filterdId]);

  const { text, completed, color, displayStatus, id } = todo;
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li style={{ display: displayStatus }}>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTodo(todo))}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            onChange={(e) => {
              dispatch(SelectTodoColor({ id, color: e.target.value }));
            }}
            style={{ color }}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button
            className="destroy"
            onClick={() => dispatch(removeTodo(todo))}
          >
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
