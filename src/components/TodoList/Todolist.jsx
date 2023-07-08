import React from 'react'
import Todo from '../Todo/Todo'

const Todolist = ({ todos }) => {
    return (
        <div>
            {todos.map(t => (
                <Todo key={t.id} title={t.title}/>
            ))}
        </div>
    )
}

export default Todolist