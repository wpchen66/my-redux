import {
    ADD_TODO,
    SHOW_ALL,
    COMPLETE_TODO,
    DELE_TODO
} from './action-type'

let todoId = 0
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        id: todoId++,
        todo
    }
}

export const completeTodo = (todos) => {
    return {
        type: COMPLETE_TODO,
        todos
    }
}

export const  deleTodo = (id) => {
    return {
        type: DELE_TODO,
        id
    }
}
export const showAll = () => {
    return {
        type: SHOW_ALL,
        todos: [
            '游泳',
            '吃饭',
            '睡觉'
        ]
    }
}