import React from 'react'
import Todo from '../Todo/Todo'

const Todolist = ({ todos,  removeTodo }) => {
    return (
        <div>
            {todos.map(t => (
                <Todo id={t.id} key={t.id} title={t.title} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default Todolist