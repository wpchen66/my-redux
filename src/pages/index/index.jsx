import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
// import List from '../list/list'
import Bundle from '../../common/bundle';
import Friend from '../friend/friend'
const Md = (props) => {
    return (
        <Bundle load={()=> import('../list/list')}>
            { (Md)=><Md {...props}/> }
        </Bundle>
    )
}

const Todos = (props) => {
    return (
        <Bundle load={()=> import('../Todos/Todos')}>
            {Todos => <Todos {...props}/>}
        </Bundle>
    )
}
export default class App extends Component{
    state = {
        hour:'00',
        min:'00',
        sec:'00'
    }
    setup = () => {
            const date = new Date()
            let time;
            if(date.getHours()>10){
                 time=date.getDate()+1
            }else{
                 time=date.getDate()
            }
            let year = date.getFullYear()
            let month = date.getMonth()+1
            let timer = new Date(`${year}/${month}/${time} 10:00:00`)
            const a = date.setHours(10)
            let poor = timer.getTime()-new Date().getTime()
            let hour = parseInt(poor/3600000)
            let min = parseInt((poor-(hour*3600000))/60000)
            let sec = parseInt((poor-(hour*3600000)-(min*60000))/1000)+1
            hour = hour<10? '0'+hour: hour
            min = min<10? '0'+min: min
            sec = sec<10? '0'+sec: sec
            sec = sec==60? '00':sec
             this.setState({
                 hour,
                 min,
                 sec
             })
             console.log(1)
             window.requestAnimationFrame(this.setup)
}
    componentDidMount(){
       this.interval = window.requestAnimationFrame(this.setup)
    }
    render(){
        let hour = this.state.hour
        let min = this.state.min
        let sec = this.state.sec
        
       
        return(
            <div>
                <div>index</div>
                <div><span>倒计时:{hour}小时{min}分钟{sec}秒</span></div>
                <Link to='/list'>查看黑名单</Link>
                <Link to='/friend'>好友</Link>
                <Link to='/todos'>计划</Link>
                <Switch>
                    <Route exact path='/list' component={Md}/>
                    <Route exact path='/friend' component={Friend}/>   
                    <Route path='/todos' component={Todos}/>
                     
                </Switch>
            </div>
        )
    }
}