import React, { Component } from 'react'
import {connect} from 'react-redux'
import './todoList.less'

import {completeTodo, deleTodo} from '../../store/actions'
import { Checkbox } from 'antd';
const mapStateProps = (state) => {
    return {todos: state.todos}
    }
class TodoList extends Component{
    state = {
        completeTodos: []
    }
    changeTodo = (event) => {
        event.persist()
        let a = 0;
        const id = event.target.id
        const isComplete = event.target.checked
        const completeTodos = this.state.completeTodos
        completeTodos.map((item) =>{
            if(item.id === id){
                a++
               item.complete = isComplete
            }
        })
      
        if(a===0){
            let obj = {
                id: event.target.id,
                complete: isComplete
            }
          completeTodos.push(obj)
        }
        this.setState({
            completeTodos
        })
    }
    completeTodo = (e) => {
        e.preventDefault()
        if(!this.state.completeTodos.length){
            return
        }
        const completeTodos = this.state.completeTodos
      const isComplete = completeTodos.filter(item => item.complete)
        this.props.dispatch(completeTodo(isComplete))
        const empty = []
        this.setState({
            completeTodos: empty
        })
    }
    del = (e) => {
        e.preventDefault()
        const id = e.target.id
        this.props.dispatch(deleTodo(id))
    }
    render(){
        let  a = 0;
        this.props.todos.map(item => {
            if(item.complete){
                a++
            }
       })
        let length = this.props.todos.length
       const List = this.props.todos.map((item)=>{
           return ( <li key={item.id}>
           <input type="checkbox" disabled={item.complete?true:false} onChange={this.changeTodo} id={item.id} defaultChecked={item.complete?true:false} />
                        计划:{item.id},Todo:{item.todo} 
                        <span className={item.complete?'greeColor':'redColor'}>{item.complete?'已完成':'未完成'}</span>
                        <button id={item.id} onClick={this.del}>删除</button>
                    </li>)
       })
       const Complete = () =>{
           if(this.props.todos.length){
               return (
                   <div>
                       <button  onClick={this.completeTodo}>完成计划</button>
                        <span>已完成：{a}/{length}</span>
                   </div>
                 )
           }
           return false
       }
        return (
            <div>
                <ul>
                {List}
                </ul>
                <Complete />
            </div>
        )
    }
}

export default connect(mapStateProps)(TodoList)