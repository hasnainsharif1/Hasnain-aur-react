import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext({
    todo: [
        {
            id: 12,
            todo: 'Todo Masg',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
}) 

export const useTodo =  () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider