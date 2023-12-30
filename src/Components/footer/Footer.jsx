import ColorFilters from "./ColorFilters";
import StatusFilter from "./StatusFilter";
import RemainingTodos from "./RemainingTodos";
import { useDispatch } from "react-redux";
import { noneTodosCompleted, allTodosCompleted } from "../todos/todosSlice";
// import { allTodosCompleted } from "../todos/todosSlice";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>

        <button
          className="button"
          onClick={() => dispatch(allTodosCompleted())}
        >
          Mark All Completed
        </button>

        <button
          className="button"
          onClick={() => dispatch(noneTodosCompleted())}
        >
          Clear Completed
        </button>
      </div>

      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
    </footer>
  );
}
