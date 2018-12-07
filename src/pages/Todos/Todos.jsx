import React, { Component } from 'react'
import AddTodo from '../AddTodo/addTodo'
import TodoList from '../TodoList/todoList'
class Todos extends Component{
    render(){
        return (
            <div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>    
           </div>
        )
    }
}

export default Todos