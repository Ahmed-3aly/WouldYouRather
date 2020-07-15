import
{
    ANSWER_LIST,
    ANSWER_ADD
} from '../Actions/Answers'

export default function Answers(state = [], e) {
    switch (e.type) {
        case ANSWER_LIST:
            state = e.List
            return state
        case ANSWER_ADD:
            state = state.concat([e.Add])
            return state
        default:
            return state
    }
}
