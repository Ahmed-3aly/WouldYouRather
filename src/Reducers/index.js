import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'
import AuthUser from './AuthUser.js'
import Answers from './Answers.js'
import Users from './Users.js'
import Polls from './Polls.js'

export default combineReducers({
    AuthUser,
    Users,
    Polls,
    Answers,
    loadingBar: loadingBarReducer,
})
