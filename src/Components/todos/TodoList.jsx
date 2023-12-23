import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.entities)

    const renderedListItems = todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
