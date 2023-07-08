import React from 'react'

const Todo = ({ title, removeTodo, id, toggleTodo, complete }) => {
    return (
        <div className='todo'>
            <p onClick={()=>toggleTodo(id)} className={complete ? 'done-task' : ''}>{title}</p>
            <button onClick={() => removeTodo(id)}>delete</button>
        </div>
    )
}

export default Todo