import { ADD_POST, ADD_COMENT } from '../actions/actionsType'

import fence from '../../../assets/imgs/fence.jpg'
import boat from '../../../assets/imgs/boat.jpg'


const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafael@gmail.com',
            image: fence,
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Incrivel'
            }, {
                nickname: 'Ana Julia Arruda',
                comment: 'Foto Linda'
            }]
        },
        {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'flima@gmail.com',
            image: boat,
            comments: []
        }
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    
                    if (post.id === action.payload.idPost) {
                        if (post.comments) {
                            post.comments.push(action.payload.comment)
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer