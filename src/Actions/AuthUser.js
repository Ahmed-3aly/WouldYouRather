export const LOGIN = 'LOGIN'

export function login(id) {
    return {
        type: LOGIN,
        Id: id,
    }
}

export const LOGOUT = 'LOGOUT'

export function logout() {
    return {
        type: LOGOUT
    }
}

