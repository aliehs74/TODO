import { useDispatch, useSelector } from "react-redux";
import { availableColors } from "../todos/colorProcess";
import { colorFilter } from "./filterSlice";

const ColorFilters = ({ value: colors }) => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  console.log("filter", filter);

  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          defaultChecked={checked}
          onClick={() => dispatch(colorFilter({ color }))}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
