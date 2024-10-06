import React, { useState } from 'react'

// Component to add an item to the list.
export const AddTodoForm = ({
    addTodo // The method to add an item to the list.
}) => {
    const [value, setValue] = useState("")

    // Method to handle the submit event of the form.
    const handleSubmit = e => {
        e.preventDefault()
        if (value) {
            addTodo(value)
            setValue("")
        }
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' value={value} className='todo-input'
                placeholder='Enter task' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}