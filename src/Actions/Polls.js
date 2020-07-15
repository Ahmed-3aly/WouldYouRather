export const POLL_LIST = 'POLL_LIST'

export function poll_List(e)
{
    return {
        type: POLL_LIST,
        List: e,
    }
}

export const POLL_ADD = 'POLL_ADD'

export function poll_Add(e)
{
    return {
        type: POLL_ADD,
        Add: e,
    }
}
