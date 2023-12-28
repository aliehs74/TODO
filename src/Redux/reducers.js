import filterSlice from "../Components/footer/filterSlice";
import todosSlice from "../Components/todos/todosSlice"

const rootReducer = {
  todo: todosSlice,
  filter: filterSlice
};

export default rootReducer