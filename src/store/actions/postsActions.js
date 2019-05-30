import { ADD_POST } from './actionsType'

export const addPost= post =>{
    return{
        type:ADD_POST,
        payload: post
    }
}

