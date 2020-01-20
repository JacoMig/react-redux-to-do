import React from 'react'
import Todo from './Todo'


export const Todos = ({todos}) => {
    return (
        <ul>
            {todos.length > 0 &&
                todos.map((todo, i) => (
                    <Todo key={i} todo={todo} index={i} />
                ))
            }
        </ul>
    )
}


