import {actionConsts} from '../constants'

export const addToDo = (todo) => {
    return {
        type: actionConsts.ADD_TO_DO,
        todo
    }
}


export const selectToDo = (todoId) => {
    return {
        type: actionConsts.SELECT_TO_DO,
        todoId
    }
}


export const setVisible = (filter) => {
    
    return {
        type: actionConsts.SET_VISIBLE,
        filter
    }
}

export const removeToDo = (index) => {
    console.log(index)
    return {
        type: actionConsts.REMOVE_TO_DO,
        index
    }
} 