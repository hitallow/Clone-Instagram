import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig