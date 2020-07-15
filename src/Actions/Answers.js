export const ANSWER_LIST = 'ANSWER_LIST'

export function answer_List(e)
{
    return {
        type: ANSWER_LIST,
        List: e,
    }
}

export const ANSWER_ADD = 'ANSWER_ADD'

export function answer_Add(e)
{
    return {
        type: ANSWER_ADD,
        Add: e,
    }
}
