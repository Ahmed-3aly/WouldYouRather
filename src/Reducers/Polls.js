import
{
    POLL_LIST,
    POLL_ADD
} from '../Actions/Polls.js'

export default function Polls(state = [], e) {
    switch (e.type) {
        case POLL_LIST:
            state = e.List
            return state
        case POLL_ADD:
            state = state.concat([e.Add])
            return state
        default:
            return state
    }
}
