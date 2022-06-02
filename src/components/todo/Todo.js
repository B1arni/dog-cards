import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () => {
    const dispatch = useDispatch();
    const savedTodos = useSelector(info => info.todos);
    const extractedTodos = JSON.parse(localStorage.getItem('todos'))

    useEffect(() => {
        dispatch({
            type: 'EXTRACT_TODO',
            payload: extractedTodos,
        })
    }, [])

    return (
        <div className="todo">
            <TodoInput />
            {savedTodos.map(savedTodo => <TodoItem key={Math.floor(Math.random() * 999)} todoItem={savedTodo} />)}
        </div>
    )
}

export default Todo;