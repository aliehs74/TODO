import { useDispatch } from "react-redux";
import { Statuses, statusFilter } from "./filterSlice";

const StatusFilter = ({ value: status }) => {
  const dispatch = useDispatch();

  const renderedFilters = Object.keys(Statuses).map((key) => {
    const value = Statuses[key];
    const className = value === status ? "selected" : "";
    return (
      <li key={value} onClick={() => dispatch(statusFilter(value))}>
        <button className={className}>{key}</button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
