import React from 'react'

const Todo = ({ title, removeTodo, id }) => {
    return (
        <div className='todo'>
            <p>{title}</p>
            <button onClick={() => removeTodo(id)}>delete</button>
        </div>
    )
}

export default Todo