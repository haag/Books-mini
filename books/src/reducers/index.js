import {combineReducers} from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from "./reducer_active_book";

//This combineReducers creates "state" with books and boooks
//To access this state, you map it to props anywhere.
//The 'key' is accessed as state.'key' and the 'value' references
//a reducer (ie BooksReducer). You pass the value in as props
const rootReducer = combineReducers({
    boooks: BooksReducer,
    book: ActiveBook
})

export default rootReducer