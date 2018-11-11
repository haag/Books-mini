import {combineReducers} from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from "./reducer.active_book";

const rootReducer = combineReducers({
    boooks: BooksReducer,
    book: ActiveBook
})

export default rootReducer