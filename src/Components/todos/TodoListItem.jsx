import { availableColors, capitalize } from "./colorProcess";
import { ReactComponent as TimesSolid } from "./times-solid.svg";

const TodoListItem = ({ todo }) => {
  const { text, completed, color, displayStatus } = todo;
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li style={{ display: displayStatus }}>
      <div className="view">
        <div className="segment label">
          <input className="toggle" type="checkbox" />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            style={{ color }}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy">
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
