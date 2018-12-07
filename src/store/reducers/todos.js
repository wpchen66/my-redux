
import { ADD_TODO, COMPLETE_TODO, DELE_TODO} from '../action-type'
import { 
    addTodo,
    showAll
 } from '../actions'

function todos (state= [], action) {
    switch (action.type){
        case ADD_TODO :
            return [
                ...state,
                {
                    complete:false,
                    todo: action.todo,
                    id : action.id
                }
            ]
        case DELE_TODO:
        console.log(action.id)
            state.map((item, index) => {
                if(item.id === Number(action.id)){
                    state.splice(index,1)
                }
            })
            return [...state]    
        case COMPLETE_TODO:
            state.map((item) => {
                action.todos.map(todo => {
                    if(item.id === Number(todo.id)){
                        item.complete =todo.complete
                        console.log(item.id)
                    }
                })
            })
            console.log(action.todos)
            return [...state]    
        default:
            return state   
    }
}

export default todos