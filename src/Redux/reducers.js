import filterSliceReducer from "../Components/footer/filterSlice";
import todosSliceReducer from "../Components/todos/todosSlice";

const rootReducer = {
  filter: filterSliceReducer,
  todo: todosSliceReducer,
};

export default rootReducer;
