import React, { useState } from 'react'
import { AddTodoForm } from './AddTodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
uuidv4()

// Component containing the entire list and input field
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false
            },
        ])
        console.log(todos)
    }

    // Method definition for toggling the 'completed' field of a task.
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    // Method definition for deleting a task from the list.
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Method definition for toggling the 'isEditing' field in for a task.
    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    // Method definition for updating the given task.
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className='TodoWrapper'>
            <h1> Things to be done</h1>
            <AddTodoForm addTodo={addTodo} />
            {
                todos.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (
                        <Todo
                            task={todo}
                            key={todo.id}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                ))
            }
        </div>
    )
}