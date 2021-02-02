export const REGISTER_USER = 'REGISTER_USER'

export const register = (user) => ({
    type: REGISTER_USER,
    payload: user
})