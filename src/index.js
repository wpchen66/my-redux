import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'

import RouterConfig from './router'
// import App from './pages/index'
let store = createStore(reducer)
console.log(store.getState())
ReactDOM.render(
    <Provider store = {store}>
        <Router >
        <RouterConfig />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
