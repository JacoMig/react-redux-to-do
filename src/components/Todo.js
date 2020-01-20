import React from 'react'
import {connect} from 'react-redux'
import {removeToDo} from '../redux/actions'

const Todo = ({dispatch, todo, index}) => {
    return (
        <li>
            {todo}
            <span>
                <button onClick={() => dispatch(removeToDo(index))}>-</button>
            </span>
        </li>
    )
}

/* 
const mapDispatchToProps = dispatch => {
    return {
        removeToDo: index => dispatch(removeToDo(index))
    }
} */

export default connect()(Todo)