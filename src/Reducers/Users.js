import
{
    USER_LIST
} from '../Actions/Users.js'

export default function Users(state = [], e) {
    switch (e.type) {
        case USER_LIST:
            state = e.List
            return state
        default:
            return state
    }
}
