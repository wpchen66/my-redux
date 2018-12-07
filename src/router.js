import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'

import Bundle from './common/bundle'
const List = (props) => (
    <Bundle load={()=>import('./pages/index')}>
        {(List) => <List {...props}/>}
    </Bundle>
)

 const RouterConfig =  () => {
     return (
            <Switch>
               <Route path='/' component={List}  />
            </Switch> 
     )
 }
export default RouterConfig 
// render={(props)=>{<App {...props} />}}