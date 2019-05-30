import { USER_LOGGED_OUT, USER_LOGGED_IN } from './actionsType'

export const login = (user) =>{
    return{
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = ()=>{
    return{
        type: USER_LOGGED_OUT
    }
}