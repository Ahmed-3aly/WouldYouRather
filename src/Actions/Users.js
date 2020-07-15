export const USER_LIST = 'USER_LIST'

export function user_List(e)
{
    return {
        type: USER_LIST,
        List: e,
    }
}
