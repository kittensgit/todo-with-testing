import React from 'react'
import Todo from '../Todo/Todo'

const Todolist = ({ todos,  removeTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map(t => (
                <Todo complete={t.status} id={t.id} key={t.id} title={t.title} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}

export default Todolist