import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Enter task'
                value={value}
                onChange={onChangeValue}
                onKeyDown={handleEnterKey} 
            />
            <button onClick={() => addTodo(value)}>add</button>
        </div>
    )
}

export default AddTodo