import React, { Component } from 'react'
import { connect} from 'react-redux'
import {addTodo} from '../../store/actions'
const mapStateToProps = (state) => {
    return {todos: state.todos}
}

class AddTodo extends Component{
    handle = (e) => {
        e.preventDefault()
        let todo = this.refs.add.value
        if(!todo.trim()){
            alert('计划不能为空')
            return
        }
        this.props.dispatch(addTodo(todo))
        this.refs.add.value =""
    }
    render(){
        return (
            <div>
                <input type="text" ref='add'/> <button onClick={this.handle}>添加todo</button>
            </div>
        )
    }
}

export default  connect(mapStateToProps)(AddTodo)