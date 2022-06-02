const TodoItem = (props) => {
    return (
        <div>
            <p>{props.todoItem}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TodoItem;