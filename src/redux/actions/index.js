import {actionConsts} from '../constants'

export const addToDo = (todo) => {
    return {
        type: actionConsts.ADD_TO_DO,
        todo
    }
}


export const removeToDo = (index) => {
    console.log(index)
    return {
        type: actionConsts.REMOVE_TO_DO,
        index
    }
} 