import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Enter task'
                value={value}
                onChange={onChangeValue}
            />
            <button onClick={() => addTodo(value)}>add</button>
        </div>
    )
}

export default AddTodo