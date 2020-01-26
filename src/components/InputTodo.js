import React from 'react';
import {addToDo} from '../redux/actions'
import { connect } from 'react-redux';

const InputTodo = ({dispatch}) => {
    
    const inputRef = React.createRef();

    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            dispatch(addToDo(inputRef.current.value));
        }
    }

    return (
        <>
            <input ref={inputRef} onKeyDown={onKeyDown}  type='text' />
            <span>
                <button onClick={() => {
                        if(inputRef.current.value !== ''){
                            dispatch(addToDo(inputRef.current.value)); 
                            inputRef.current.value = ''
                        }
                    }}
                >+</button>
            </span>
        </>
    )
}


export default connect()(InputTodo)
