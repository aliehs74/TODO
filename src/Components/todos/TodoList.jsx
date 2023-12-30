import { useState } from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todosSlice";
import { nanoid } from "@reduxjs/toolkit";
const TodoList = () => {
  const [value, setValue] = useState("");

  const newtodo = {
    id: nanoid(4),
    text: value,
    completed: false,
    color: "",
    displayStatus: "",
  };

  const todos = useSelector((state) => state.todo.data);
  console.log("todos", todos);

  //
  const dispatch = useDispatch();

  const todosId = Object.keys(todos);

  const renderedListItems = todosId.map((id) => {
    return <TodoListItem key={id} todo={todos[id]} />;
  });

  return (
    <>
      <header className="header">
        <input
          className="new-todo"
          placeholder="write new todo"
          // defaultValue={value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(addTodo(newtodo));
              setValue("");
            }
          }}
        />
      </header>
      <ul className="todo-list">{renderedListItems}</ul>;
    </>
  );
};

export default TodoList;
