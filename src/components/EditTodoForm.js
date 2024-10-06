import React, { useState } from 'react'

// Component to edit an item in the list.
export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    // Method to handle the submit event of the form.
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}