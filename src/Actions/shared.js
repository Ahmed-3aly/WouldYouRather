import { showLoading, hideLoading } from 'react-redux-loading'
import API_Client from '../Utils/API_Client.js'
import {
    answer_List,
    answer_Add,
} from './Answers.js'
import
{
    user_List
} from './Users.js'
import {
    login,
    logout
} from './AuthUser.js'
import {
    poll_List,
    poll_Add
} from './Polls.js'

function handleAuth() {
    return (dispatch) => {
        const authUser = localStorage.getItem('AuthUser')
        if (authUser !== null) {
            dispatch(login(authUser))
        }
        else {
            dispatch(logout())
        }
    }
}

export function handleInit() {
    return (dispatch) => {
        dispatch(showLoading())
        API_Client.Init()
            .then(({
                Users,
                Polls,
                Answers,
            }) => {
                dispatch(user_List(Users))
                dispatch(poll_List(Polls))
                dispatch(answer_List(Answers))
                dispatch(handleAuth())
                dispatch(hideLoading())
            })
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(showLoading())
        localStorage.removeItem('AuthUser')
        dispatch(logout())
        dispatch(hideLoading())
    }
}

export function handleLogin(Id) {
    localStorage.setItem('AuthUser', Id)
}

export function handleAnswer(
    authUserId,
    pollId,
    answerId
) {
    return (dispatch) => {
        dispatch(showLoading())
        API_Client.pollAnswer(
            authUserId,
            pollId,
            answerId
        ).then(() => {
            dispatch(answer_Add({
                UserId: authUserId,
                PollId: pollId,
                AnswerId: answerId
            }))
            dispatch(hideLoading())
        })
    }
}

export function handleCreate(
    authUserId,
    optionOneText,
    optionTwoText
) {
    return (dispatch) => {
        dispatch(showLoading())
        API_Client.pollCreate(
            authUserId,
            optionOneText,
            optionTwoText
        ).then((result) => {
            dispatch(poll_Add({
                Id: result.id,
                AuthorId: authUserId,
                On: result.timestamp,
                Answers: [
                    optionOneText,
                    optionTwoText
                ]
            }))
            dispatch(hideLoading())
        })
    }
}
