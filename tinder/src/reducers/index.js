import {combineReducers} from 'redux'
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
    boooks: BooksReducer
})

export default rootReducer