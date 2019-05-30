import { ADD_POST, ADD_COMENT } from './actionsType'

export const addPost= post =>{
    return{
        type:ADD_POST,
        payload: post
    }
}

export const addComent = payload =>{
    return{
        type:ADD_COMENT,
        payload
    }
}

