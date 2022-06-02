import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoInput = () => {
    const [todo, setTodo] = useState({});
    const dispatch = useDispatch();
    const toLocalStorage = useSelector((info) => info.todos);

    const changeHandler = (event) => {
        setTodo(event.target.value);
    }

    const sendTodo = () => {
        if (todo !== '') {
            dispatch({
                type: 'ADD_TODO',
                payload: todo,
            })
        }

        localStorage.setItem('todos', JSON.stringify(toLocalStorage));
    }

    return (
        <div className="todo">
            <input onChange={(event) => changeHandler(event)} type='text' className="todo-input" />
            <button onClick={sendTodo} className="add">Add</button>
        </div>
    )
}

export default TodoInput;