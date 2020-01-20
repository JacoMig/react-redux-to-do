import React from 'react';
import {addToDo} from '../../redux/actions'
import { connect } from 'react-redux';

const InputTodo = ({dispatch}) => {
    
    const inputRef = React.createRef();

    return (
        <>
            <input ref={inputRef}   type='text' />
            <span>
                <button onClick={() => {
                    dispatch(addToDo(inputRef.current.value)); 
                    inputRef.current.value = ''}}
                >+</button>
            </span>
        </>
    )
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        addToDoClick: todo => {
            dispatch(addToDo(inputRef.current.value))
        }
    }
} */

export default connect()(InputTodo)
