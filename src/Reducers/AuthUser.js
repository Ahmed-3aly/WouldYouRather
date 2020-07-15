import {
    LOGIN,
    LOGOUT
} from '../Actions/AuthUser.js'

export default function AuthUser(state = {}, e) {
    switch (e.type) {
        case LOGIN:
            state = {
                Ready: true,
                Id: e.Id
            }
            return state
        case LOGOUT:
            state = {
                Ready: false
            }
            return state
        default:
            return state
    }
}
