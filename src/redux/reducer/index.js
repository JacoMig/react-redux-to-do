import {actionConsts} from '../constants'


const initialState = {
    visibilityFilter: actionConsts.SHOW_ALL,
    todos: [
        {id: 0, body: 'studiare-redux', completed: false },
        {id: 1, body: 'mangiare', completed: false },
        {id: 2, body: 'pisciare', completed: false }
      ]
  }

export const StoreReducer = (state = initialState, action) => {
    
    switch(action.type){
        case actionConsts.ADD_TO_DO:
        const Index = (state.todos.length)
        return {
            ...state,
            todos: [
              ...state.todos,
              {id: Index, body: action.todo, completed: false},
            ]
          }
        case actionConsts.REMOVE_TO_DO:
        return  {
            ...state,
            todos: state.todos.filter((todo, i) => action.index !== i )
          }
        case actionConsts.SELECT_TO_DO:
          
          const newTodos = state.todos.map(todo => { 
              if(todo.id === action.todoId){
                todo.completed = !todo.completed
              }
              
              return todo
            }
          )
          return  {
            ...state,  
            todos: newTodos
          }
         case actionConsts.SET_VISIBLE:
          return  {
            ...state,
            visibilityFilter: action.filter,
            
          }
          
        case undefined :
          return state
        default:
          return state
    }
    
}