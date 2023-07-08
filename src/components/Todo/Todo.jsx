import React from 'react'

const Todo = ({title}) => {
    return (
        <div className='todo'>
            <p>{title}</p>
            <button>delete</button>
        </div>
    )
}

export default Todo