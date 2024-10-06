import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// The component to represent every task in the list.
export const Todo = ({
    task,   // The task object.
    toggleComplete, // The method to toggle the completion of the task.
    deleteTodo, // The method to delete the task. 
    editTodo  // The method to edit the task.
}) => {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}