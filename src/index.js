import React from 'react'
import ReactDOM from 'react-dom'
import './Styles/index.css'
import App from './Views/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './Reducers'
import Middleware from './Middleware'
const Store = createStore(Reducer, Middleware)

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
	document.getElementById('root')
);
