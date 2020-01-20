import {actionConsts} from '../constants'


const initialState = {
    // visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
        'studiar redux',
        'mangiare',
        'pisciare'
      ]
  }

export const StoreReducer = (state = initialState, action) => {
    
    switch(action.type){
        case actionConsts.ADD_TO_DO:
          return {
              todos: [
                action.todo,
                ...state.todos,
              ]
          }
        case actionConsts.REMOVE_TO_DO:
        return  {
              todos: state.todos.filter((todo, i) => action.index !== i )
          }
        case undefined :
          return state
        default:
          return state
    }
    
}