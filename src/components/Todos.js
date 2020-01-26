import React from 'react'
import { actionConsts } from '../redux/constants'
import { connect } from 'react-redux'
import {selectToDo} from '../redux/actions'

const visibilityFilter = (todos, filter) => {
    switch(filter){
        case actionConsts.SHOW_ALL:
            return todos
        case actionConsts.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case actionConsts.SHOW_UNCOMPLETED:
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}

const Todos = ({todos, dispatch}) => {
    
    const toggleItem = (todoId) => {
        dispatch(selectToDo(todoId))
    }
   
    return (
        <ul>
            {todos.length > 0 &&
                todos.map((todo, i) => (
                    <li key={i} className={`item ${todo.completed ? 'select' : ''}`} id={todo.id} onClick={() => toggleItem(todo.id)}>
                        {todo.body}
                    </li>
                ))
            }
        </ul>
    )
}


const mapStateToProps = state => ({
    todos: visibilityFilter(state.todos,state.visibilityFilter),
    
})

export default connect(mapStateToProps, null)(Todos)